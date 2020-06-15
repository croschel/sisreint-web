import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 70%;
  margin: 0 auto;

  h2{
    margin: 30px auto;
    text-align: center;
    color: #fff;
    font-size: 30px;
    text-shadow: 0px 0px 11px rgba(0,0,0,0.8);
  }

  div {
    display: flex;
    flex-direction: row;
    width: 50%;
    margin-top: 50px;
    margin-bottom: 80px;

    select {
      height: 50px;
      font-size: 18px;
      border-radius: 12px;
      background: #fff;
      color: #707070;
    }

    #mes {
      width: 70%;
      margin-right: 1%;
    }
    #ano{
      width: 29%;
    }
  }

  button{
    padding: 20px;
    font-size: 24px;
    width: 55%;
    border: none;
    border-radius: 22px;
    margin-bottom: 40px;
    color: #fff;
    font-weight: bold;

    
  }
  #first-button{
    background: #CA1A1A;
    &:hover{
      background: ${darken(0.15, '#CA1A1A')};
      transition-duration: 1s;

    }
  }
  #second-button{
    background: #1A21CA;
    
    &:hover{
      background: ${darken(0.15, '#1A21CA')};
      transition-duration: 1s;
    }
  }
  #cmt-button{
    background: transparent;
    width: 25%;
    border: solid 1px #fff;
    box-shadow: 1px 1px 25px -2px rgba(0,0,0,0.75);
    margin-top: 8%;
    margin-bottom: 2px;
  
    &:hover{
      background: ${darken(0.15, '#bcbcbc')};
      transition-duration: 1s;
    }
  }
  #update-button{
    background: transparent;
    width: 25%;
    border: solid 1px #fff;
    box-shadow: 1px 1px 25px -2px rgba(0,0,0,0.75);
    margin-top: 8%;
    margin-bottom: 2px;
    text-align: center;
  
  
    &:hover{
      background: ${darken(0.15, '#bcbcbc')};
      transition-duration: 1s;
    }
  }
`;

export const UpdateBox = styled.div`
  width: 100%;
  display: flex;

  input{
    width: 73%;
    margin-right: 2%;
    border-radius: 12px;
    padding: 8px;
    font-size: 18px;
    color: #707070;

  }
  select{
    width: 20%;
    color: #707070;
  }
`;
