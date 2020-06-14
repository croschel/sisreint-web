import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { FiPlus } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import $ from 'jquery';

import trash from '~/assets/trash.svg';
import view from '~/assets/view.svg';
import api from '~/services/api';
import history from '~/services/history';
import { dateCalendar } from '~/util/formatDate';
import Header from '~/components/Header';


import { Container, OptionsBox, TreatmentTable, ViewBox } from './styles';

function Treatment() {
  const { id } = useParams();

  const [treatments, setTreatments] = useState([]);
  const [treatmentView, setTreatmentView] = useState({});
  const [search, setSearch] = useState('');
  const [searchedMonth, setSearchedMonth] = useState([]);
  const [visible, setVisible] = useState(false);


  useEffect(() => {
    async function loadTreatments() {
      const response = await api.get(`treatments/${id}`);
      setTreatments(response.data);
      setSearchedMonth(response.data);
    }
    loadTreatments();
  }, [])

  useEffect(() => {
    const result = treatments.filter(treatment =>
      treatment.mes_referencia.includes(search))
    setSearchedMonth(result);
  }, [search])


  function handleDelete(treatment) {
    async function deleteTreatment() {
      await api.delete(`treatments/${treatment.id}`);
      toast.success("Tratamento deletado com sucesso")
      window.location.reload(false);
    }
    confirmAlert({
      title: 'Apagar Tratamento',
      message: 'Tem certeza que deseja realizar essa operação?',
      buttons: [
        {
          label: 'Sim',
          onClick: () => deleteTreatment(),
        },
        {
          label: 'Não',
          onClick: () => { },
        }
      ]
    })
  }

  function handleView(treatment) {
    setTreatmentView(treatment);

    $('body').click(function () {
      setVisible(false);
    })
    setVisible(!visible);
  }


  function handleAddTreatment() {
    history.push(`/add_treatment/${id}`)
  }

  return (
    <>
      <Header />
      <Container>
        <h2>Tratamentos</h2>
        <OptionsBox>
          <input
            type="search"
            name="search"
            placeholder="Procure pelo mês"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={() => handleAddTreatment()}><FiPlus size={70} color="#fff" /></button>
        </OptionsBox>
        <TreatmentTable>
          <thead>
            <tr>
              <th>ID</th>
              <th>Data / Referência</th>
              <th>Data Lançamento</th>
              <th>Última Apresentação</th>
              <th>Próxima Apresentação</th>
            </tr>
          </thead>
          <tbody>
            {searchedMonth.map(treatment => (
              <tr>
                <td>{treatment.id}</td>
                <td>{treatment.mes_referencia} / {treatment.ano_referencia}</td>
                <td>{dateCalendar(treatment.createdAt)}</td>
                <td>{treatment.ultima_apres}</td>
                <td>{treatment.prox_apres}</td>
                <td><button type="button" onClick={() => handleView(treatment)}><img src={view} alt="edit" /></button></td>
                <td><button type="button" onClick={() => handleDelete(treatment)}><img src={trash} alt="delete" /></button></td>
              </tr>
            ))}

          </tbody>
        </TreatmentTable>
        <ViewBox visible={visible}>
          <div id="content">
            <h2>Detalhes do Tratamento</h2>
            <div>
              <label htmlFor="referencia">Mês/Ano Referência:</label>
              <p name="referencia">{treatmentView.mes_referencia} de {treatmentView.ano_referencia}</p>
            </div>
            <div>
              <label htmlFor="qtd_cons_marcada">Consultas Marcadas:</label>
              <p name="qtd_cons_marcada">{treatmentView.qtd_cons_marcada}</p>
            </div>
            <div>
              <label htmlFor="qtd_cons_realizada">Consultas Realizadas:</label>
              <p name="qtd_cons_realizada">{treatmentView.qtd_cons_realizada}</p>
            </div>
            <div>
              <label htmlFor="exame_solicitado">Exames Solicitados:</label>
              <p name="exame_solicitado">{treatmentView.exame_solicitado}</p>
            </div>
            <div>
              <label htmlFor="exame_agendado">Exames Agendados:</label>
              <p name="exame_agendado">{treatmentView.exame_agendado}</p>
            </div>
            <div>
              <label htmlFor="exame_realizado">Exames Realizados:</label>
              <p name="exame_realizado">{treatmentView.exame_realizado}</p>
            </div>
            <div>
              <label htmlFor="laudo_solicitado">Laudos Solicitados:</label>
              <p name="laudo_solicitado">{treatmentView.laudo_solicitado ? 'Sim' : 'Não'}</p>
            </div>
            <div>
              <label htmlFor="laudo_confeccionado">Laudos Confeccionados:</label>
              <p name="laudo_confeccionado">{treatmentView.laudo_confeccionado}</p>
            </div>
            <div>
              <label htmlFor="sessao_fisioterapia">Sessões Fisioterapia:</label>
              <p name="sessao_fisioterapia">{treatmentView.sessao_fisioterapia}</p>
            </div>
            <div>
              <label htmlFor="ultima_apres">Última Apresentação:</label>
              <p name="ultima_apres">{treatmentView.ultima_apres}</p>
            </div>
            <div>
              <label htmlFor="prox_apres">Próxima Apresentação:</label>
              <p name="prox_apres">{treatmentView.prox_apres}</p>
            </div>
          </div>
        </ViewBox>
      </Container >
    </>
  )
}

export default Treatment;