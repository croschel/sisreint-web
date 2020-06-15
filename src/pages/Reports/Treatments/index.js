import React, { useEffect, useState } from 'react';

import { Container, Header, HeaderImg, Content, MilitariesTable, Signature } from './styles';
import { useLocation } from 'react-router-dom';
import brasao from '~/assets/brasao.png';
import api from '~/services/api';

function Treatments() {
  const resp = useLocation();
  const { month, year } = resp.state.referencia;
  const { commander } = resp.state;
  const [treatments, setTreatments] = useState([]);

  useEffect(() => {
    async function loadTreatments() {
      const response = await api.get(`reports/?month=${month}&year=${year}`);
      setTreatments(response.data);
      console.tron.log(response.data);
    }
    loadTreatments();
  }, [month, year])

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
        <h3>Relatório de Tratamento dos militares Reintegrados por Decisão Judicial do 2º B Log L no mês de {month} de {year}</h3>
        <MilitariesTable>
          <thead>
            <tr>
              <th style={{ width: 280 }}>Nome</th>
              <th style={{ width: 50 }}>Quantidade de consultas marcadas</th>
              <th style={{ width: 50 }}>Quantidade de consultas realizadas</th>
              <th style={{ width: 50 }}>Exame Solicitado</th>
              <th style={{ width: 60 }}>Exame Agendado</th>
              <th style={{ width: 100 }}>Exame Realizado</th>
              <th style={{ width: 100 }}>Laudo Solicitado</th>
              <th style={{ width: 20 }}>Laudo Confeccionado</th>
              <th style={{ width: 50 }}>Sessão de Fisioterapia realizada</th>
              <th style={{ width: 100 }}>Última Apresentação na OM</th>
              <th style={{ width: 100 }}>Próxima Apresentação na OM</th>
            </tr>
          </thead>
          <tbody>
            {treatments.map(treatment => (
              <tr>
                <td>{treatment.Military.nome}</td>
                <td>{treatment.qtd_cons_marcada}</td>
                <td>{treatment.qtd_cons_realizada}</td>
                <td>{treatment.exame_solicitado}</td>
                <td>{treatment.exame_agendado}</td>
                <td>{treatment.exame_realizado}</td>
                <td>{treatment.laudo_solicitado}</td>
                <td>{treatment.laudo_confeccionado}</td>
                <td>{treatment.sessao_fisioterapia}</td>
                <td>{treatment.ultima_apres}</td>
                <td>{treatment.prox_apres}</td>
              </tr>
            ))}

          </tbody>
        </MilitariesTable>
        <Signature>
          <div>
            <h2>{commander.name} - {commander.posto_grad}</h2>
            <p>{commander.funcao}</p>
          </div>
        </Signature>
      </Content>
    </Container>
  );
}

export default Treatments;