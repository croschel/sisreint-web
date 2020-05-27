import React, { useEffect, useState } from 'react';
import { FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import medical from '~/assets/medical.svg';
import view from '~/assets/view.svg';
import draw from '~/assets/draw.svg';
import trash from '~/assets/trash.svg';
import { Container, OptionsBox, MilitaryTable } from './styles';
import api from '~/services/api';

function Military() {
  const [militaries, setMilitaries] = useState([]);

  useEffect(() => {
    async function loadMilitaries() {
      const response = await api.get('militaries');
      setMilitaries(response.data);
    }
    loadMilitaries();

  }, []);

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
            <th>Nome de Guerra</th>
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
              <td>{military.nome}</td>
              <td>{military.arma}</td>
              <td>{military.data_praca}</td>
              <td>{military.situacao}</td>
              <td><Link to="/treatment"><img src={medical} alt="add treatment" /></Link></td>
              <td><button type="button"><img src={view} alt="visualize" /></button></td>
              <td><Link to="/edit_militaries"><img src={draw} alt="edit" /></Link></td>
              <td><button type="button"><img src={trash} alt="delete" /></button></td>
            </tr>
          ))}

        </tbody>
      </MilitaryTable>

    </Container>
  );
}

export default Military;
