import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';
import { FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import $ from 'jquery';
import medical from '~/assets/medical.svg';
import view from '~/assets/view.svg';
import draw from '~/assets/draw.svg';
import trash from '~/assets/trash.svg';
import { Container, OptionsBox, MilitaryTable, ViewBox } from './styles';
import Header from '~/components/Header';

import api from '~/services/api';
import history from '~/services/history';

function Military() {
  const user = useSelector(state => state.user.profile);

  const [militaries, setMilitaries] = useState([]);
  const [militaryView, setMilitaryView] = useState({});
  const [visible, setVisible] = useState(false);
  const [search, setSearch] = useState();
  const [searchedMilitary, setSearchedMilitary] = useState([]);

  useEffect(() => {
    async function loadMilitaries() {
      const response = await api.get('militaries');
      setMilitaries(response.data);
      setSearchedMilitary(response.data);
    }
    loadMilitaries();

  }, []);

  useEffect(() => {
    const result = militaries.filter(military =>
      military.nome.toLowerCase().includes(search)
    );
    setSearchedMilitary(result);
  }, [search])

  function handleEdit(military) {
    history.push(`/edit_militaries/${military.id}`)

  }
  function handleDelete(military) {
    async function deleteMilitary() {
      await api.delete(`militaries/${military.id}`);
      toast.success("Militar deletado com sucesso")
      window.location.reload(false);
    }
    confirmAlert({
      title: 'Apagar militar',
      message: 'Tem certeza que deseja realizar essa operação?',
      buttons: [
        {
          label: 'Sim',
          onClick: () => deleteMilitary(),
        },
        {
          label: 'Não',
          onClick: () => { },
        }
      ]
    })
  }

  function handleTreatment(military) {
    history.push(`/treatment/${military.id}`)
  }
  function handleView(military) {

    setMilitaryView(military);
    $('body').click(function () {
      setVisible(false);
    })
    setVisible(!visible);
  }
  return (
    <>
      <Header />
      <Container visible={visible}>
        <h2>MILITARES REINTEGRADOS</h2>
        <OptionsBox>
          <input
            type="search"
            name="search"
            placeholder="Procure pelo nome de guerra"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Link to="/add_militaries"><FiPlus size={70} color="#fff" /></Link>
        </OptionsBox>
        <MilitaryTable>
          <thead>
            <tr>
              <th>ID</th>
              <th>Posto/Grad</th>
              <th>Identidade</th>
              <th>Nome</th>
              <th>Especialização</th>
              <th>Data de Praça</th>
              <th>Situação</th>
            </tr>
          </thead>
          <tbody>
            {searchedMilitary.map(military => (
              <tr>
                <td>{military.id}</td>
                <td>{military.posto_grad}</td>
                <td>{military.identidade}</td>
                <td>{military.nome}</td>
                <td>{military.arma}</td>
                <td>{military.data_praca}</td>
                <td>{military.situacao}</td>
                <td><button type="button" onClick={() => handleTreatment(military)}><img src={medical} alt="add treatment" /></button></td>
                <td><button type="button" onClick={() => handleView(military)}><img src={view} alt="visualize" /></button></td>
                <td><button type="button" onClick={() => handleDelete(military)}><img src={trash} alt="delete" style={{ display: user.juridico ? '' : 'none' }} /></button></td>
                <td><button type="button" onClick={() => handleEdit(military)}><img src={draw} alt="edit" style={{ display: user.juridico ? '' : 'none' }} /></button></td>
              </tr>
            ))}
          </tbody>
        </MilitaryTable>
        <ViewBox visible={visible}>
          <div id="content">
            <h2>Dados do Militar</h2>
            <div>
              <label htmlFor="idt">IDT MIL:</label>
              <p name="idt">{militaryView.identidade}</p>
            </div>
            <div>
              <label htmlFor="cpf">CPF:</label>
              <p name="cpf">{militaryView.cpf}</p>
            </div>
            <div>
              <label htmlFor="nome">NOME:</label>
              <p name="nome">{militaryView.nome}</p>
            </div><div>
              <label htmlFor="om">OM:</label>
              <p name="om">{militaryView.om}</p>
            </div><div>
              <label htmlFor="posto">POSTO/GRAD:</label>
              <p name="posto">{militaryView.posto_grad}</p>
            </div><div>
              <label htmlFor="arma">ARMA:</label>
              <p name="arma">{militaryView.arma}</p>
            </div><div>
              <label htmlFor="exmilitar">EX-MILITAR:</label>
              <p name="exmilitar">{militaryView.ex_militar ? 'Sim' : 'Não'}</p>
            </div><div>
              <label htmlFor="datanasc">DATA NASC:</label>
              <p name="datanasc">{militaryView.data_nascimento}</p>
            </div>
            <div>
              <label htmlFor="historico">HISTÓRICO:</label>
              <p name="historico">{militaryView.historico}</p>
            </div><div>
              <label htmlFor="processo">PROCESSO:</label>
              <p name="processo">{militaryView.processo}</p>
            </div><div>
              <label htmlFor="situação">SITUAÇÃO:</label>
              <p name="situação">{militaryView.situacao}</p>
            </div><div>
              <label htmlFor="publicacao">DATA PUBLICAÇÃO:</label>
              <p name="publicacao">{militaryView.tipo_data_publicacao}</p>
            </div><div>
              <label htmlFor="consequencia">CONSEQUÊNCIA:</label>
              <p name="consequencia">{militaryView.consequencia}</p>
            </div>
          </div>
        </ViewBox>
      </Container>
    </>
  );
}

export default Military;
