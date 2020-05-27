import React from 'react';
import { Input, Form } from '@rocketseat/unform';

import { Container } from './styles';

function EditUser() {

  return (
    <Container>
      <h2>EDIÇÃO DE USUÁRIOS</h2>
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
          <label htmlFor="juridico">JURÍDICO:</label>
          <select name="juridico" onChange="">
            <option value="" selected="selected disabled hidden" >Selecione</option>
            <option value={true}>Sim</option>
            <option value={false}>Não</option>
          </select>
        </div>
        <div>
          <label htmlFor="password">SENHA:</label>
          <Input name="password" />
        </div>
        <div>
          <label htmlFor="password">CONFIRMAR SENHA:</label>
          <Input name="password" />
        </div>
        <button type="submit">ATUALIZAR</button>
        <button type="button">CANCELAR</button>
      </Form>
    </Container>
  );
}

export default EditUser;