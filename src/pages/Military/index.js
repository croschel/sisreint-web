import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';
import { FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import medical from '~/assets/medical.svg';
import view from '~/assets/view.svg';
import draw from '~/assets/draw.svg';
import trash from '~/assets/trash.svg';
import { Container, OptionsBox, MilitaryTable } from './styles';
import api from '~/services/api';
import history from '~/services/history';

function Military() {
  const [militaries, setMilitaries] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    async function loadMilitaries() {
      const response = await api.get('militaries');
      setMilitaries(response.data);
    }
    loadMilitaries();

  }, []);

  function handleEdit(military) {
    history.push(`/edit_militaries/${military.id}`)
  }
  function handleDelete(military) {
    async function deleteMilitary() {
      await api.delete(`militaries/${military.id}`);
      toast.success("Militar deletado com sucesso")
      window.location.reload(false);
    }

    confirmAlert({
      title: 'Apagar militar',
      message: 'Tem certeza que deseja realizar essa operação?',
      buttons: [
        {
          label: 'Sim',
          onClick: () => deleteMilitary(),
        },
        {
          label: 'Não',
          onClick: () => { },
        }
      ]
    })
  }

  function handleTreatment(military) {
    history.push(`/treatment/${military.id}`)
  }

  return (
    <Container>
      <h2>MILITARES REINTEGRADOS</h2>
      <OptionsBox>
        <input
          type="search"
          name="search"
          placeholder="Procure pelo nome de guerra"
          onChange={() => { }}
        />
        <Link to="/add_militaries"><FiPlus size={70} color="#fff" /></Link>
      </OptionsBox>
      <MilitaryTable>
        <thead>
          <tr>
            <th>ID</th>
            <th>Posto/Grad</th>
            <th>Identidade</th>
            <th>Nome</th>
            <th>Especialização</th>
            <th>Data de Praça</th>
            <th>Situação</th>
          </tr>
        </thead>
        <tbody>
          {militaries.map(military => (
            <tr>
              <td>{military.id}</td>
              <td>{military.posto_grad}</td>
              <td>{military.identidade}</td>
              <td>{military.nome}</td>
              <td>{military.arma}</td>
              <td>{military.data_praca}</td>
              <td>{military.situacao}</td>
              <td><button type="button" onClick={() => handleTreatment(military)}><img src={medical} alt="add treatment" /></button></td>
              <td><button type="button"><img src={view} alt="visualize" /></button></td>
              <td><button type="button" onClick={() => handleEdit(military)}><img src={draw} alt="edit" /></button></td>
              <td><button type="button" onClick={() => handleDelete(military)}><img src={trash} alt="delete" /></button></td>
            </tr>
          ))}
        </tbody>
      </MilitaryTable>

    </Container>
  );
}

export default Military;
