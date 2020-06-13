import React, { useState, useEffect } from 'react';

import { Container } from './styles';
import api from '~/services/api';

function Reports() {
  const [mesReferencia, setMesReferencia] = useState('');
  const [treatmentsYears, setTreatmentsYears] = useState([]);
  const [anoReferencia, setAnoReferencia] = useState('');

  useEffect(() => {
    async function loadYears() {
      const response = await api.get('treatments');
      const treatmentList = response.data;
      const years = treatmentList.map(treatment => treatment.ano_referencia);

      setTreatmentsYears(Array.from(new Set(years)));
    }
    loadYears();
  }, [])

  return (
    <Container>
      <h2>Relatórios Mensais</h2>
      <div>
        <select id="mes" name="mes_referencia" value={mesReferencia} onChange={(e) => setMesReferencia(e.target.value)}>
          <option value="" selected="selected disabled hidden" >Selecione</option>
          <option value="janeiro">Janeiro</option>
          <option value="fevereiro">Fevereiro</option>
          <option value="marco">Março</option>
          <option value="abril">Abril</option>
          <option value="maio">Maio</option>
          <option value="junho">Junho</option>
          <option value="julho">Julho</option>
          <option value="agosto">Agosto</option>
          <option value="setembro">Setembro</option>
          <option value="outubro">Outubro</option>
          <option value="novembro">Novembro</option>
          <option value="dezembro">Dezembro</option>
        </select>
        <select id="ano" name="mes_referencia" value={anoReferencia} onChange={(e) => setAnoReferencia(e.target.value)}>
          <option value="" selected="selected disabled hidden" >Selecione</option>
          {treatmentsYears.map(year => (
            <option value={year}>{year}</option>
          ))}
        </select>
      </div>
      <button id="first-button" onClick={() => { }}>Tratamento dos militares Reintegrados por Decisão judicial</button>
      <button id="second-button" onClick={() => { }}>Ficha de informações de militares em situação especial</button>
    </Container>
  );
}

export default Reports;
