import React from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import soldier from '~/assets/gun.png';
import { Form, Input } from '@rocketseat/unform';

import { signInRequest } from '~/store/modules/auth/actions';

function SignIn() {
  //Dispatch Actions
  const dispatch = useDispatch();

  //Validate inputs
  const schema = Yup.object().shape({
    nickname: Yup.string().required("Digite um nome válido", "color: red"),
    password: Yup.string().required("Coloque uma senha válida"),
  })

  function handleSubmit({ nickname, password }) {

    dispatch(signInRequest(nickname, password));
  }

  return (
    <>
      <h1>SISTEMA DE CADASTRO DE REINTEGRADOS</h1>
      <div>
        <img src={soldier} alt="soldado" />
        <h2>LOGIN</h2>
        <Form schema={schema} onSubmit={handleSubmit}>
          <Input name="nickname" type="text" placeholder="Digite seu nome de guerra" />
          <Input name="password" type="password" placeholder="Digite sua senha" />
          <button type="submit">ENTRAR</button>
        </Form>
      </div>
      <p>Desenvolvido pelo 1º Ten Caique <strong>Roschel</strong></p>
      <p>2º B Log L - Campinas</p>


    </>
  );
}

export default SignIn;
