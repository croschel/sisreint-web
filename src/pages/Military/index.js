import React from 'react';
import { FiPlus } from 'react-icons/fi'

import medical from '~/assets/medical.svg';
import view from '~/assets/view.svg';
import draw from '~/assets/draw.svg';
import trash from '~/assets/trash.svg';
import { Container, OptionsBox, MilitaryTable } from './styles';

function Military() {
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
        <button><FiPlus size={70} color="#fff" /></button>
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
            <td><img src={medical} alt="add treatment" /></td>
            <td><img src={view} alt="visualize" /></td>
            <td><img src={draw} alt="edit" /></td>
            <td><img src={trash} alt="delete" /></td>
          </tr>
          <tr>
            <td>01</td>
            <td>1º Ten</td>
            <td>Roschel</td>
            <td>Mat Bel</td>
            <td>12/01/2012</td>
            <td>Adido Reintegrado</td>
            <td><img src={medical} alt="add treatment" /></td>
            <td><img src={view} alt="visualize" /></td>
            <td><img src={draw} alt="edit" /></td>
            <td><img src={trash} alt="delete" /></td>
          </tr>
        </tbody>
      </MilitaryTable>

    </Container>
  );
}

export default Military;
