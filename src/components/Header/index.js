import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import boina from '~/assets/fashion.png';
import { signOut } from '~/store/modules/auth/actions';
import { Container, Content, LeftBox, TitleBox, NavBox, UserBox } from './styles';

function Header() {
  const user = useSelector(state => state.user.profile)
  const dispatch = useDispatch();



  function handleSignOut() {
    dispatch(signOut());
    return;
  }
  console.tron.log(user.juridico)
  return (
    <Container>
      <Content>
        <LeftBox>
          <TitleBox>
            <h1>SisReint</h1>
          </TitleBox>
          <NavBox>
            <Link to="/militaries" >MILITARES</Link>
            <Link to="/users" style={{ display: user.juridico ? '' : 'none' }}>USUÁRIOS</Link>
            <Link to="/reports" style={{ display: user.juridico ? '' : 'none' }}>RELATÓRIOS</Link>
          </NavBox>
        </LeftBox>
        <UserBox>
          <img src={boina} alt="boina" />
          <div>
            <p>{`${user.posto_grad} ${user.nickname}`}</p>
            <Link to="/profile">editar perfil</Link>
            <button onClick={handleSignOut}>sair do sistema</button>
          </div>
        </UserBox>
      </Content>
    </Container>
  );
}

export default Header;