import React, { useState } from 'react';
import { Input, Form } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';

import Header from '~/components/Header';
import { Container } from './styles';
import api from '~/services/api';
import history from '~/services/history';

function Profile() {
  const user = useSelector(state => state.user.profile);

  const [graduation, setGraduation] = useState(user.posto_grad);
  const [juridic, setJuridic] = useState(user.juridico);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [nickname, setNickname] = useState(user.nickname);

  async function handleSubmit({ oldPassword, password, confirmPassword }) {
    try {
      await api.put(`users/${user.id}`, {
        name,
        nickname,
        posto_grad: graduation,
        email,
        juridico: juridic,
        oldPassword,
        password,
        confirmPassword
      })
      toast.success("Usuário atualizado com sucesso")
      history.push("/militaries");
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
        <h2>ATUALIZAR PERFIL</h2>
        <Form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">NOME:</label>
            <input name="name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label htmlFor="warname">NOME DE GUERRA:</label>
            <input name="warname" value={nickname} onChange={(e) => setNickname(e.target.value)} />
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
            <input name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label htmlFor="juridico">JURÍDICO:</label>
            <select disabled={juridic ? false : true} name="juridico" value={juridic} onChange={(e) => setJuridic(e.target.value)}>
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

export default Profile;