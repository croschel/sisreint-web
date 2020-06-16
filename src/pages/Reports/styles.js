import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;

  h2{
    margin: 30px auto;
    text-align: center;
    color: #fff;
    font-size: 30px;
    text-shadow: 0px 0px 11px rgba(0,0,0,0.8);
  }

  #content {
    display: flex;
    flex-direction: row;
    width: 35%;
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
    width: 40%;
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
  
`;
export const GroupUpdate = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  justify-content: center;
  align-items: center;
  
`;

export const CommanderUpdate = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
  align-items: center;


  #cmt-button{
    background: transparent;
    width: 35%;
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
    width: 40%;
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

export const S1Update = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
  align-items: center;

  #s1-button{
    background: transparent;
    width: 30%;
    border: solid 1px #fff;
    box-shadow: 1px 1px 25px -2px rgba(0,0,0,0.75);
    margin-top: 8%;
    margin-bottom: 2px;
  
    &:hover{
      background: ${darken(0.15, '#bcbcbc')};
      transition-duration: 1s;
    }
  }
  #update-s1-button{
    background: transparent;
    width: 40%;
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
  display: flex;
  margin-top: 10px;

  input{
    font-size: 18px;
    color: #707070;
    border-radius: 12px;
    width: 400px;
    padding: 10px;
  }
  select {
      height: 50px;
      font-size: 18px;
      border-radius: 12px;
      background: #fff;
      color: #707070;
      width: 25%;
      padding: 10px;

    }
`;
