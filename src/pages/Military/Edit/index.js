import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Input, Form } from '@rocketseat/unform';
import { toast } from 'react-toastify';

import { Container } from './styles';
import api from '~/services/api';
import history from '~/services/history';

function EditMilitary() {
  const { id } = useParams();
  const [military, setMilitary] = useState({});
  const [graduation, setGraduation] = useState();
  const [exmilitar, setExmilitar] = useState();
  const [unidade, setUnidade] = useState();

  useEffect(() => {
    async function loadMilitaries() {
      const response = await api.get(`militaries/${id}`);
      setMilitary(response.data);
    }
    loadMilitaries();
  }, [])

  async function handleSubmit({ idt, name, data_praca, process, cpf, especial, datanasc, publication, situation, historico, consequence }) {
    try {
      await api.put(`militaries/${id}`, {
        identidade: idt,
        cpf,
        nome: name,
        om: unidade,
        posto_grad: graduation,
        arma: especial,
        ex_militar: exmilitar,
        data_nascimento: datanasc,
        data_praca,
        historico,
        processo: process,
        situacao: situation,
        tipo_data_publicacao: publication,
        consequencia: consequence
      });
      toast.success("Militar atualizado com sucesso")
      history.push("/militaries")
    } catch (error) {
      toast.error("Erro de Validação, verifique os dados")
    }
  }
  function handleCancel() {
    history.push("/militaries")
  }
  console.tron.log(military)
  return (
    <Container>
      <h2>EDIÇÃO DE MILITARES</h2>
      <Form onSubmit={handleSubmit}>
        <div id="master">
          <div id="form-left">
            <div>
              <label htmlFor="idt">IDT MIL:</label>
              <Input name="idt" value={military.identidade} />
            </div>
            <div>
              <label htmlFor="name">NOME:</label>
              <Input name="name" value={military.nome} />
            </div>
            <div>
              <label htmlFor="graduation">POSTO/GRAD:</label>
              <select name="graduation" value={graduation} onChange={(e) => setGraduation(e.target.value)}>
                <option value={military.posto_grad} selected="selected disabled hidden" >{military.posto_grad}</option>
                <option value="Cel">Cel</option>
                <option value="Ten Cel">Ten Cel</option>
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
            </div>
            <div>
              <label htmlFor="ex-militar">EX-MILITAR:</label>
              <select name="ex-militar" value={exmilitar} onChange={(e) => setExmilitar(e.target.value)}>
                <option value={military.ex_militar} selected="selected disabled hidden">{military.ex_militar ? 'Sim' : 'Não'}</option>
                <option value={true}>Sim</option>
                <option value={false}>Não</option>
              </select>
            </div>
            <div>
              <label htmlFor="data_praca">DATA PRAÇA:</label>
              <Input name="data_praca" value={military.data_praca} />
            </div>
            <div>
              <label htmlFor="process">PROCESSO:</label>
              <Input name="process" value={military.processo} />
            </div>
          </div>
          <div id="form-right">
            <div>
              <label htmlFor="cpf">CPF:</label>
              <Input name="cpf" value={military.cpf} />
            </div>
            <div>
              <label htmlFor="om">OM:</label>
              <select name="ex-militar" value={unidade} onChange={(e) => setUnidade(e.target.value)}>
                <option value="" selected="selected disabled hidden">Selecione</option>
                <option value="2º B Log L">2º B Log L</option>
              </select>
            </div>
            <div>
              <label htmlFor="especial">ARMA:</label>
              <Input name="especial" value={military.arma} />
            </div>
            <div>
              <label htmlFor="datanasc">DATA NASC:</label>
              <Input name="datanasc" value={military.data_nascimento} />
            </div>
            <div>
              <label htmlFor="publication">DATA PUBLICAÇÃO:</label>
              <Input name="publication" value={military.tipo_data_publicacao} />

            </div>
            <div>
              <label htmlFor="situation">SITUAÇÃO:</label>
              <Input name="situation" value={military.situacao} />
            </div>
          </div>
        </div>
        <div id="form-bottom">
          <div>
            <label htmlFor="historico">HISTÓRICO:</label>
            <Input name="historico" value={military.historico} />
          </div>
          <div>
            <label htmlFor="consequence">CONSEQUÊNCIA:</label>
            <Input name="consequence" value={military.consequencia} />
          </div>
        </div>
        <button type="submit">ATUALIZAR</button>
        <button type="button" onClick={handleCancel}>CANCELAR</button>
      </Form>
    </Container>
  );
}

export default EditMilitary;