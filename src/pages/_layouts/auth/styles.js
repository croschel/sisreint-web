import styled from 'styled-components';
import user from '~/assets/avatar.svg';
import password from '~/assets/communications.svg';

export const Wrapper = styled.div`
  background: #184b10;
  height: 100%;
`;

export const Content = styled.div`
  h1{
    text-align: center;
    padding: 60px;
    font-size: 54px;
    color: #fff;
    text-shadow: 4px 3px 19px #0F0604;
  }

  div{
    background: #248D1A;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 50px auto;
    width: 490px;
    height: 470px;
    border-radius: 27px;
    padding: 20px;
  }

  img{
    width: 123px;
    height: 123px;
    margin-bottom: 10px;
  }
  h2 {
    font-size: 40px;
    color: #fff;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 65%;
    padding: 10px 0;

    input:first-of-type{
      height: 45px;
      border-radius: 6px;
      margin-bottom: 10px;
      padding: 10px 35px;
      background-image: url(${user});
      fill: #bababa;
      background-size: 25px;
      background-position: left;
      background-position-x: 5px;
      background-repeat: no-repeat;
      border:none;
      color: #777777;
      font-size: 18px;

      ::placeholder {
        color: #bababa;
        font-size: 14px;
      }
    }

    input:last-of-type{
      height: 45px;
      border-radius: 6px;
      margin-bottom: 10px;
      padding: 10px 35px;
      background-image: url(${password});
      background-size: 25px;
      background-position: left;
      background-position-x: 5px;
      background-repeat: no-repeat;
      border:none;
      
      ::placeholder {
        color: #bababa;
        font-size: 14px;
      }
    }

    button{
      height: 45px;
      border-radius: 6px;
      margin-top: 10px;
      background: #AEB11B;
      border: none; 
      box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.8);
      color: #fff;
      font-weight: bold;
      font-size: 28px;
    }
  }
  `;