import styled from 'styled-components';

export const Container = styled.div`
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  
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
    width: 100%;
    justify-content: center;
    margin: 0 45% 0 0;

    div {
      padding: 10px;
      display: flex;
      width: 100%;
      justify-content: flex-end;
      align-items: center;

      label {
        margin-right: 5px;
        color: #fff;
        font-weight: bold;
        width: auto;
        text-align: right;
      }
      input {
        width: 50%;
        height: 38px;
        border-radius: 8px;
        border: none;
        padding: 10px;
        color: #777777;
      }
      select {
        width: 50%;
        height: 38px;
        border-radius: 8px;
        border: none;
        background: #fff;
        padding: 10px;
        color: #777777;

      }

    }
    
    button{
      width: 48%;
      border-radius: 8px;
      border:none;
      height: 48px;
      margin: 10px 50%;
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
