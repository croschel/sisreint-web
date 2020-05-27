import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import draw from '~/assets/draw.svg';
import trash from '~/assets/trash.svg';
import { Container, OptionsBox, MilitaryTable } from './styles';
import api from '~/services/api';
import history from '~/services/history';

function Users() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState();
  const [searchedUser, setSearchedUser] = useState([]);


  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('users');
      setUsers(response.data);
      setSearchedUser(response.data);
    }
    loadUsers();
  }, [])

  useEffect(() => {
    const result = users.filter(user =>
      user.nickname.toLowerCase().includes(search)
    );
    setSearchedUser(result);
  }, [search])

  function handleEdit(user) {
    history.push(`/edit_users/${user.id}`)
  }

  function handleDelete(user) {
    async function deleteUser() {
      await api.delete(`users/${user.id}`);
      toast.success("Usuário deletado com sucesso")
      window.location.reload(false);
    }

    confirmAlert({
      title: 'Apagar usuário',
      message: 'Tem certeza que deseja realizar essa operação?',
      buttons: [
        {
          label: 'Sim',
          onClick: () => deleteUser(),
        },
        {
          label: 'Não',
          onClick: () => { },
        }
      ]
    })
  }

  return (
    <Container>
      <h2>USUÁRIOS</h2>
      <OptionsBox>
        <input
          type="search"
          name="search"
          placeholder="Procure pelo nome de guerra"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Link to="/add_users"><FiPlus size={70} color="#fff" /></Link>
      </OptionsBox>
      <MilitaryTable>
        <thead>
          <tr>
            <th>ID</th>
            <th>Posto/Grad</th>
            <th>Nome de Guerra</th>
            <th>Email</th>
            <th>Juridico</th>
          </tr>
        </thead>
        <tbody>
          {searchedUser.map(user => (
            <tr>
              <td>{user.id}</td>
              <td>{user.posto_grad}</td>
              <td>{user.nickname}</td>
              <td>{user.email}</td>
              <td>{user.juridico ? 'Sim' : 'Não'}</td>
              <td><button type="button" onClick={() => handleEdit(user)}><img src={draw} alt="edit" /></button></td>
              <td><button type="button" onClick={() => handleDelete(user)}><img src={trash} alt="delete" /></button></td>
            </tr>
          ))}

        </tbody>
      </MilitaryTable>


    </Container >
  );
}

export default Users;
