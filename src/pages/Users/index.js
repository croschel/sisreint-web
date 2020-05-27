import React, { useEffect, useState } from 'react';
import { FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import view from '~/assets/view.svg';
import draw from '~/assets/draw.svg';
import trash from '~/assets/trash.svg';
import { Container, OptionsBox, MilitaryTable } from './styles';
import api from '~/services/api';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('users');
      setUsers(response.data)
    }
    loadUsers();
  }, [users])

  return (
    <Container>
      <h2>USUÁRIOS</h2>
      <OptionsBox>
        <input
          type="search"
          name="search"
          placeholder="Procure pelo nome de guerra"
          onChange={() => { }}
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
          {users.map(user => (
            <tr>
              <td>{user.id}</td>
              <td>{user.posto_grad}</td>
              <td>{user.nickname}</td>
              <td>{user.email}</td>
              <td>{user.juridico ? 'Sim' : 'Não'}</td>
              <td><button type="button"><img src={view} alt="visualize" /></button></td>
              <td><Link to="/edit_users"><img src={draw} alt="edit" /></Link></td>
              <td><button type="button"><img src={trash} alt="delete" /></button></td>
            </tr>
          ))}

        </tbody>
      </MilitaryTable>

    </Container>
  );
}

export default Users;
