import React, { useEffect, useState } from 'react';

import { Container, Header, HeaderImg, Content, MilitariesTable } from './styles';
import brasao from '~/assets/brasao.png';
import api from '~/services/api';

function Militaries() {

  const [militaries, setMilitaries] = useState([]);

  useEffect(() => {
    async function loadMilitaries() {
      const response = await api.get('militaries');
      setMilitaries(response.data);
      console.tron.log(response.data)
    }
    loadMilitaries();
  }, [])

  return (
    <Container>
      <Header>
        <HeaderImg src={brasao} />
        <h2>MINISTÉRIO DA DEFESA</h2>
        <h2>EXÉRCITO BRASILEIRO</h2>
        <h2>2º BATALHÃO LOGÍSTICO LEVE</h2>
        <h2>BATALHÃO CIDADE DE CAMPINAS</h2>
      </Header>
      <Content>
        <h3>FICHA DE INFORMAÇÕES DE MILITARES EM SITUAÇÕES ESPECIAIS (FI-MSE)</h3>
        <MilitariesTable>
          <thead>
            <tr>
              <th style={{ width: 80 }}>OM</th>
              <th style={{ width: 50 }}>Posto-Grad</th>
              <th style={{ width: 5 }}>Arma/Quadro/Sv/QMS/QMG-QMP/Ex-militar</th>
              <th style={{ width: 20 }}>Identidade e CPF</th>
              <th style={{ width: 300 }}>Nome</th>
              <th style={{ width: 100 }}>Dt Nasc</th>
              <th style={{ width: 100 }}>Dt Praça</th>
              <th style={{ width: 20 }}>Situação Especial(atual do militar)</th>
              <th style={{ width: 150 }}>Tipo/Nº/ Dt Doc Publicou o ato (DOU, BI, BAR)</th>
              <th style={{ width: 350 }}>Consequencia</th>
            </tr>
          </thead>
          <tbody>
            {militaries.map(military => (
              <tr>
                <td>{military.om}</td>
                <td>{military.posto_grad}</td>
                <td>{military.ex_militar ? 'Ex-Militar' : military.arma}</td>
                <td>{military.identidade}</td>
                <td>{military.nome}</td>
                <td>{military.data_nascimento}</td>
                <td>{military.data_praca}</td>
                <td>{military.situacao}</td>
                <td>{military.tipo_data_publicacao}</td>
                <td>{military.consequencia}</td>
              </tr>
            ))}

          </tbody>
        </MilitariesTable>
      </Content>
    </Container>
  );
}

export default Militaries;