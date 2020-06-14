import styled from 'styled-components';

export const Container = styled.div`
  background: #248D1A;
  height: 110px;
  display: flex;
  width: 100%;
  align-items: center;
`;

export const LeftBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 70%;
  margin: 0 auto;
  justify-content: space-between;
`;

export const TitleBox = styled.div`
  border-right: 1px solid #bcbcbc;
  
  h1{
    font-size: 36px;
    color: #fff;
    margin: 10px 20px;
    text-shadow: 0px 0px 11px rgba(0,0,0,0.8);
  }
`;

export const NavBox = styled.nav`
  margin-left: 20px;
  
  a{
    color: #000;
    font-weight: bold;
    margin-right: 20px;
    font-size: 22px;
    text-shadow: 0px 0px 11px rgba(0,0,0,0.8);
  }
`;
export const UserBox = styled.div`
  display: flex;
  flex-direction: row;

  img{
    border: 1px solid #fff;
    border-radius: 50%;
    padding: 5px;
    background: #fff;
    margin-right: 10px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    font-weight: bold;

    p{
      color: #fff;
      margin-bottom: 5px;
    }

    a{
      color: #fff;
      margin-bottom: 5px;
    }

    button {
      background: transparent;
      border: none;
      text-align: left;
      width: 100%;
      color: #BD0823;
      font-size: 14px;
    }
  }

`;