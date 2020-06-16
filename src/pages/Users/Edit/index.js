import React, { useState, useEffect } from 'react';
import { Input, Form } from '@rocketseat/unform';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import Header from '~/components/Header';
import { Container } from './styles';
import api from '~/services/api';
import history from '~/services/history';

function EditUser() {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [graduation, setGraduation] = useState();
  const [juridic, setJuridic] = useState();

  useEffect(() => {
    async function loadInfoForm() {
      const response = await api.get(`users/${id}`);
      setUser(response.data);
      setGraduation(response.data.posto_grad);
      setJuridic(response.data.juridico);
    }
    loadInfoForm();

  }, [id])
  async function handleSubmit({ name, warname, email, oldPassword, password, confirmPassword }) {
    try {
      await api.put(`users/${id}`, {
        name,
        nickname: warname,
        posto_grad: graduation,
        email,
        juridico: juridic,
        oldPassword,
        password,
        confirmPassword
      })
      toast.success("Usuário atualizado com sucesso")
      history.push("/users");
    } catch (error) {
      toast.error("Erro de Validação, verifique seus dados")
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
        <h2>EDIÇÃO DE USUÁRIOS</h2>
        <Form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">NOME:</label>
            <Input name="name" value={user.name} />
          </div>
          <div>
            <label htmlFor="warname">NOME DE GUERRA:</label>
            <Input name="warname" value={user.nickname} />
          </div>
          <div>
            <label htmlFor="graduation">POSTO/GRAD:</label>
            <select name="graduation" value={graduation} onChange={(e) => setGraduation(e.target.value)}>
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
            <Input name="email" type="email" value={user.email} />
          </div>
          <div>
            <label htmlFor="juridico">JURÍDICO:</label>
            <select name="juridico" value={juridic} onChange={(e) => setJuridic(e.target.value)}>
              <option value={true}>Sim</option>
              <option value={false}>Não</option>
            </select>
          </div>
          <div>
            <label htmlFor="oldPassword">SENHA ANTIGA:</label>
            <Input name="oldPassword" type="password" />
          </div>
          <div>
            <label htmlFor="password">NOVA SENHA:</label>
            <Input name="password" type="password" />
          </div>
          <div>
            <label htmlFor="confirmPassword">CONFIRMAR SENHA:</label>
            <Input name="confirmPassword" type="password" />
          </div>
          <button type="submit">ATUALIZAR</button>
          <button type="button" onClick={handleCancel}>CANCELAR</button>
        </Form>
      </Container>
    </>
  );
}

export default EditUser;