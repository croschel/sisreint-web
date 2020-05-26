import React, { useEffect } from 'react';
import { FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import medical from '~/assets/medical.svg';
import view from '~/assets/view.svg';
import draw from '~/assets/draw.svg';
import trash from '~/assets/trash.svg';
import { Container, OptionsBox, MilitaryTable } from './styles';
import api from '~/services/api';

function Military() {

  useEffect(() => {
    async function loadMilitaries() {
      const response = await api.get('militaries');
      console.tron.log(response.data);
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
          <tr>
            <td>01</td>
            <td>1º Ten</td>
            <td>Roschel</td>
            <td>Mat Bel</td>
            <td>12/01/2012</td>
            <td>Adido Reintegrado</td>
            <td><Link to="/treatment"><img src={medical} alt="add treatment" /></Link></td>
            <td><button type="button"><img src={view} alt="visualize" /></button></td>
            <td><Link to="/edit_militaries"><img src={draw} alt="edit" /></Link></td>
            <td><button type="button"><img src={trash} alt="delete" /></button></td>
          </tr>
          <tr>
            <td>01</td>
            <td>1º Ten</td>
            <td>Roschel</td>
            <td>Mat Bel</td>
            <td>12/01/2012</td>
            <td>Adido Reintegrado</td>
            <td><Link to="/"><img src={medical} alt="add treatment" /></Link></td>
            <td><button type="button"><img src={view} alt="visualize" /></button></td>
            <td><Link to="/"><img src={draw} alt="edit" /></Link></td>
            <td><button type="button"><img src={trash} alt="delete" /></button></td>
          </tr>
        </tbody>
      </MilitaryTable>

    </Container>
  );
}

export default Military;
