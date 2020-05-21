import React from 'react';
import { Link } from 'react-router-dom';

import boina from '~/assets/fashion.png';

import { Container, Content, LeftBox, TitleBox, NavBox, UserBox } from './styles';

function Header() {
  return (
    <Container>
      <Content>
        <LeftBox>
          <TitleBox>
            <h1>SisReint</h1>
          </TitleBox>
          <NavBox>
            <Link to="/militaries" >MILITARES</Link>
            <Link to="/users" >USUÁRIOS</Link>
            <Link to="/reports" >RELATÓRIOS</Link>
          </NavBox>
        </LeftBox>
        <UserBox>
          <img src={boina} alt="boina" />
          <div>
            <p>1º Ten Roschel</p>
            <Link to="/edit">editar perfil</Link>
            <button onClick={() => { }}>sair do sistema</button>
          </div>
        </UserBox>
      </Content>
    </Container>
  );
}

export default Header;