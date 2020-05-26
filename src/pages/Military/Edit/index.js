import React from 'react';
import { Input, Form } from '@rocketseat/unform';

import { Container } from './styles';

function EditMilitary() {

  return (
    <Container>
      <h2>EDIÇÃO DE MILITARES</h2>
      <Form>
        <div id="master">
          <div id="form-left">
            <div>
              <label htmlFor="idt">IDT MIL:</label>
              <Input name="idt" />
            </div>
            <div>
              <label htmlFor="name">NOME:</label>
              <Input name="name" />
            </div>
            <div>
              <label htmlFor="graduation">POSTO/GRAD:</label>
              <Input name="graduation" />
            </div>
            <div>
              <label htmlFor="ex-militar">EX-MILITAR:</label>
              <select name="ex-militar">
                <option value="" selected="selected disabled hidden">Selecione</option>
                <option value={true}>Sim</option>
                <option value={false}>Não</option>
              </select>
            </div>
            <div>
              <label htmlFor="data-praca">DATA PRAÇA:</label>
              <Input name="data-praca" />
            </div>
            <div>
              <label htmlFor="process">PROCESSO:</label>
              <Input name="process" />
            </div>
          </div>
          <div id="form-right">
            <div>
              <label htmlFor="cpf">CPF:</label>
              <Input name="cpf" />
            </div>
            <div>
              <label htmlFor="om">OM:</label>
              <Input name="om" />
            </div>
            <div>
              <label htmlFor="especial">ARMA:</label>
              <Input name="especial" />
            </div>
            <div>
              <label htmlFor="datanasc">DATA NASC:</label>
              <Input name="datanasc" />
            </div>
            <div>
              <label htmlFor="publication">DATA PUBLICAÇÃO:</label>
              <Input name="publication" />

            </div>
            <div>
              <label htmlFor="situation">SITUAÇÃO:</label>
              <Input name="situation" />
            </div>
          </div>
        </div>
        <div id="form-bottom">
          <div>
            <label htmlFor="history">HISTÓRICO:</label>
            <Input name="history" />
          </div>
          <div>
            <label htmlFor="consequence">CONSEQUÊNCIA:</label>
            <Input name="consequence" />
          </div>
        </div>
        <button type="submit">ATUALIZAR</button>
        <button type="button">CANCELAR</button>
      </Form>
    </Container>
  );
}

export default EditMilitary;