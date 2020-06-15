import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Header from '~/components/Header';
import { Container, UpdateBox } from './styles';
import api from '~/services/api';
import history from '~/services/history';

function Reports() {
  const [mesReferencia, setMesReferencia] = useState('');
  const [treatmentsYears, setTreatmentsYears] = useState([]);
  const [anoReferencia, setAnoReferencia] = useState('');
  const [commander, setCommander] = useState({});
  const [visible, setVisible] = useState(false);
  const [graduation, setGraduation] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    async function loadYears() {
      const response = await api.get('treatments');
      const treatmentList = response.data;
      const years = treatmentList.map(treatment => treatment.ano_referencia);

      setTreatmentsYears(Array.from(new Set(years)));
    }
    async function loadCmt() {
      const response = await api.get('commander');
      const cmt = response.data;
      setCommander(cmt);
    }
    loadYears();
    loadCmt();
  }, [])

  function handleMilitariesReport() {
    history.push('/militaries_report', {
      commander,
    });
  }

  function handleTreatmentReport() {
    history.push('/treatments_report', {
      referencia: {
        year: anoReferencia,
        month: mesReferencia
      },
      commander,

    });
  }

  async function handleUpdateCmt() {
    try {
      await api.put('commander', {
        name,
        posto_grad: graduation,
      })
      setVisible(!visible);
      toast.success("Comandante Atualizado com sucesso");
    } catch (err) {
      toast.error("Erro de validação. Verifique seus Dados");
      return;
    }

  }

  function handleVisibleCmt() {
    setVisible(!visible);
  }

  return (
    <>
      <Header />
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
        <button type='button' id="first-button" onClick={handleTreatmentReport}>Tratamento dos militares Reintegrados por Decisão judicial</button>
        <button type='button' id="second-button" onClick={handleMilitariesReport}>Ficha de informações de militares em situação especial</button>
        <button type="button" id="update-button" style={{ display: visible ? '' : 'none' }} onClick={handleUpdateCmt}>Atualizar Comandante</button>
        <button type='button' style={{ display: !visible ? '' : 'none' }} id="cmt-button" onClick={handleVisibleCmt}>Mudar Comandante</button>
        <UpdateBox style={{ display: visible ? 'flex' : 'none' }}>
          <input name="name" placeholder={commander.name} value={name} onChange={(e) => setName(e.target.value)} />
          <select name="graduation" value={graduation} onChange={(e) => setGraduation(e.target.value)}>
            <option value={commander.posto_grad} selected="selected disabled hidden" >{commander.posto_grad}</option>
            <option value="Cel">Cel</option>
            <option value="TC">TC</option>
            <option value="Maj">Maj</option>
            <option value="Cap">Cap</option>
            <option value="1º Ten">1º Ten</option>
            <option value="2º Ten">2º Ten</option>
            <option value="Sub Ten">Sub Ten</option>
            <option value="1º Sgt">1º Sgt</option>
            <option value="2º Sgt">2º Sgt</option>
            <option value="3º Sgt">3º Sgt</option>
            <option value="Cabo">Cabo</option>
            <option value="Sd EP">Sd EP</option>
            <option value="Sd Ev">Sd Ev</option>
          </select>
        </UpdateBox>
      </Container>
    </>
  );
}

export default Reports;
