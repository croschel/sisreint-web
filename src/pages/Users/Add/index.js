import React, { useState } from 'react';
import { Input, Form } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import { Container } from './styles';
import history from '~/services/history';
import api from '~/services/api';
import Header from '~/components/Header';

function AddUser() {
  const [juridic, setJuridic] = useState();
  const [graduation, setGraduation] = useState();

  async function handleSubmit({ name, warname, email, password }) {
    try {
      await api.post('users', {
        name,
        nickname: warname,
        posto_grad: graduation,
        email,
        juridico: juridic,
        password
      });
      toast.success("Usuário cadastrado com sucesso")
      history.push("/users");
    } catch (error) {
      toast.error("Erro ao Cadastrar. Favor verificar os dados");
      return;
    }


  }
  function handleCancel() {
    history.push("/users");
  }

  return (
    <>
      <Header />
      <Container>
        <h2>CADASTRO DE USUÁRIOS</h2>
        <Form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">NOME:</label>
            <Input name="name" />
          </div>
          <div>
            <label htmlFor="warname">NOME DE GUERRA:</label>
            <Input name="warname" />
          </div>
          <div>
            <label htmlFor="graduation">POSTO/GRAD:</label>
            <select name="graduation" value={graduation} onChange={(e) => setGraduation(e.target.value)}>
              <option value="" selected="selected disabled hidden" >Selecione</option>
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
            <label htmlFor="email">EMAIL:</label>
            <Input name="email" type="email" />
          </div>
          <div>
            <label htmlFor="juridico">JURÍDICO:</label>
            <select name="juridico" value={juridic} onChange={(e) => setJuridic(e.target.value)}>
              <option value="" selected="selected disabled hidden" >Selecione</option>
              <option value={true}>Sim</option>
              <option value={false}>Não</option>
            </select>
          </div>
          <div>
            <label htmlFor="password">SENHA:</label>
            <Input name="password" type="password" />
          </div>
          <button type="submit">CADASTRAR</button>
          <button type="button" onClick={handleCancel}>CANCELAR</button>
        </Form>
      </Container>
    </>
  );
}

export default AddUser;