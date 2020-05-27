import React from 'react';
import { Input, Form } from '@rocketseat/unform';

import { Container } from './styles';

function Profile() {

  return (
    <Container>
      <h2>ATUALIZAR PERFIL</h2>
      <Form>
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
          <Input name="graduation" />
        </div>
        <div>
          <label htmlFor="email">EMAIL:</label>
          <Input name="email" type="email" />
        </div>
        <div>
          <label htmlFor="process">SENHA:</label>
          <Input name="process" />
        </div>
        <div>
          <label htmlFor="process">CONFIRMAR SENHA:</label>
          <Input name="process" />
        </div>
        <button type="submit">ATUALIZAR</button>
        <button type="button">CANCELAR</button>
      </Form>
    </Container>
  );
}

export default Profile;