import styled from 'styled-components';

export const Container = styled.div`
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  
  h2{
    margin: 30px auto;
    text-align: center;
    color: #fff;
    font-size: 30px;
    text-shadow: 0px 0px 11px rgba(0,0,0,0.8);
  }

  Form {
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    div {
      padding: 10px;
      text-align: right;
      margin: 0 150px 0 0;

      label {
        margin: 0 5px;
        color: #fff;
        font-weight: bold;
      }
      input {
        width: 300px;
        height: 38px;
        border-radius: 8px;
        border: none;
      }
      select {
        width: 300px;
        height: 38px;
        border-radius: 8px;
        border: none;
        background: #fff;
        padding: 10px;
      }

    }
    button{
      width: 48%;
      border-radius: 8px;
      border:none;
      height: 48px;
      margin: 20px 158px 0 auto;
      color: #fff;
      font-weight: bold;
      font-size: 20px;
    }
    button:first-of-type{
      background: #AEB11B;
    }
    button:last-of-type{
      background: #E63737;
    }
  }

`;
