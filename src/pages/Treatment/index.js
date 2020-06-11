import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { FiPlus } from 'react-icons/fi';
import { Link, useParams } from 'react-router-dom';

import trash from '~/assets/trash.svg';
import view from '~/assets/view.svg';
import api from '~/services/api';
import history from '~/services/history';
import { dateCalendar } from '~/util/formatDate';

import { Container, OptionsBox, TreatmentTable } from './styles';

function Treatment() {
  const { id } = useParams();

  const [treatments, setTreatments] = useState([]);
  const [search, setSearch] = useState();
  const [searchedYear, setSearchedYear] = useState([]);

  useEffect(() => {
    async function loadTreatments() {
      const response = await api.get(`treatments/${id}`);
      setTreatments(response.data);
    }
    loadTreatments();
  }, [])

  function handleDelete(treatment) { }

  function handleView(treatment) {

  }

  function handleAddTreatment() {
    history.push(`/add_treatment/${id}`)
  }
  console.tron.log(treatments)
  return (
    <Container>
      <h2>Tratamentos</h2>
      <OptionsBox>
        <input
          type="search"
          name="search"
          placeholder="Procure pelo ano"
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
          {treatments.map(treatment => (
            <tr>
              <td>{treatment.id}</td>
              <td>{treatment.mes_referencia}</td>
              <td>{dateCalendar(treatment.createdAt)}</td>
              <td>{treatment.ultima_apres}</td>
              <td>{treatment.prox_apres}</td>
              <td><button type="button" onClick={() => handleView(treatment)}><img src={view} alt="edit" /></button></td>
              <td><button type="button" onClick={() => handleDelete(treatment)}><img src={trash} alt="delete" /></button></td>
            </tr>
          ))}

        </tbody>
      </TreatmentTable>


    </Container >
  )
}

export default Treatment;