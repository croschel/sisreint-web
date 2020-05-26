import React from 'react';
import { FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import view from '~/assets/view.svg';
import draw from '~/assets/draw.svg';
import trash from '~/assets/trash.svg';
import { Container, OptionsBox, MilitaryTable } from './styles';

function Users() {
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
          <tr>
            <td>01</td>
            <td>1º Ten</td>
            <td>Roschel</td>
            <td>croschel000@gmail.com</td>
            <td>sim</td>
            <td><button type="button"><img src={view} alt="visualize" /></button></td>
            <td><Link to="/edit_users"><img src={draw} alt="edit" /></Link></td>
            <td><button type="button"><img src={trash} alt="delete" /></button></td>
          </tr>
          <tr>
            <td>01</td>
            <td>1º Ten</td>
            <td>Roschel</td>
            <td>croschel000@gmail.com</td>
            <td>sim</td>
            <td><button type="button"><img src={view} alt="visualize" /></button></td>
            <td><Link to="/edit_users"><img src={draw} alt="edit" /></Link></td>
            <td><button type="button"><img src={trash} alt="delete" /></button></td>
          </tr>
        </tbody>
      </MilitaryTable>

    </Container>
  );
}

export default Users;
