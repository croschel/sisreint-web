import React from 'react';
import soldier from '~/assets/gun.png';
import { Form, Input } from '@rocketseat/unform';

function SignIn() {
  return (
    <>
      <h1>SISTEMA DE CADASTRO DE REINTEGRADOS</h1>
      <div>
        <img src={soldier} alt="soldado" />
        <h2>LOGIN</h2>
        <Form onSubmit={() => { }}>
          <Input name="nickname" type="text" placeholder="Digite seu nome de guerra" />
          <Input name="password" type="password" placeholder="Digite sua senha" />
          <button type="submit">ENTRAR</button>
        </Form>
      </div>


    </>
  );
}

export default SignIn;
