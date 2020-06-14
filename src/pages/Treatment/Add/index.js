import React, { useState } from 'react';
import { Input, Form } from '@rocketseat/unform';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import Header from '~/components/Header';
import { Container } from './styles';
import api from '~/services/api';
import history from '~/services/history';

function AddTreatment() {
  const { id } = useParams();

  const [mesReferencia, setMesReferencia] = useState('');

  async function handleSubmit({
    qtd_cons_marcada,
    qtd_cons_realizada,
    exame_solicitado,
    exame_agendado,
    exame_realizado,
    ano_referencia,
    laudo_solicitado,
    laudo_confeccionado,
    sessao_fisioterapia,
    ultima_apres,
    prox_apres
  }) {
    try {
      await api.post(`treatments/${id}`, {
        mes_referencia: mesReferencia,
        ano_referencia,
        qtd_cons_marcada,
        qtd_cons_realizada,
        exame_solicitado,
        exame_agendado,
        exame_realizado,
        laudo_solicitado,
        laudo_confeccionado,
        sessao_fisioterapia,
        ultima_apres,
        prox_apres
      });
      toast.success('Tratamento cadastrado com sucesso');
      history.push(`/treatment/${id}`);
    } catch (error) {
      toast.error('Falha no envio. Verifique seus Dados!')
    }
  }

  function handleCancel() {
    history.push(`/treatment/${id}`);

  }

  return (
    <>
      <Header />
      <Container>
        <h2>CADASTRAR TRATAMENTO</h2>
        <Form onSubmit={handleSubmit}>
          <div id="master">
            <div id="form-left">
              <div>
                <label htmlFor="mes_referencia">Mes Referência:</label>
                <select name="mes_referencia" value={mesReferencia} onChange={(e) => setMesReferencia(e.target.value)}>
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
              </div>
              <div>
                <label htmlFor="qtd_cons_marcada">Consultas Marcadas:</label>
                <Input name="qtd_cons_marcada" />
              </div>
              <div>
                <label htmlFor="qtd_cons_realizada">Consultas Realizadas:</label>
                <Input name="qtd_cons_realizada" />
              </div>
              <div>
                <label htmlFor="exame_solicitado">Exames Solicitados:</label>
                <Input name="exame_solicitado" />
              </div>
              <div>
                <label htmlFor="exame_agendado">Exames Agendados:</label>
                <Input name="exame_agendado" />
              </div>
              <div>
                <label htmlFor="exame_realizado">Exames Realizados:</label>
                <Input name="exame_realizado" />
              </div>
            </div>
            <div id="form-right">
              <div>
                <label htmlFor="ano_referencia">Ano Referência:</label>
                <Input name="ano_referencia" />
              </div>
              <div>
                <label htmlFor="laudo_solicitado">Laudos Solicitados:</label>
                <Input name="laudo_solicitado" />
              </div>
              <div>
                <label htmlFor="laudo_confeccionado">Laudos Confeccionados:</label>
                <Input name="laudo_confeccionado" />
              </div>
              <div>
                <label htmlFor="sessao_fisioterapia">Sessões de Fisioterapia:</label>
                <Input name="sessao_fisioterapia" />
              </div>
              <div>
                <label htmlFor="ultima_apres">Última Apresentação:</label>
                <Input name="ultima_apres" />
              </div>
              <div>
                <label htmlFor="prox_apres">Próxima Apresentação:</label>
                <Input name="prox_apres" />
              </div>
            </div>
          </div>

          <button type="submit">CADASTRAR</button>
          <button type="button" onClick={handleCancel}>CANCELAR</button>
        </Form>
      </Container>
    </>
  );
}

export default AddTreatment;
