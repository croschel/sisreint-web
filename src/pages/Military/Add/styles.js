import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
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
    width: 100%;

     #master {
      text-align: right;
      display: flex;
      margin: 0 auto 0 150px;
      
      > div{
        
        > div {
          padding: 0 0 10px 0;
        }
      }

      label {
        margin: 0 5px;
        color: #fff;
        font-weight: bold;
        
      }
      input {
        width: 250px;
        height: 38px;
        border-radius: 8px;
        border: none;
      }
      select {
        width: 250px;
        height: 38px;
        border-radius: 8px;
        border: none;
        background: #fff;
        padding: 10px;
      }

    }
    #form-bottom {
      text-align: right;
      display: flex;
      flex-direction: column;
      margin: 0 auto 0 125px;

      label {
        margin: 0 5px;
        color: #fff;
        font-weight: bold;
        
      }
      input {
        width: 670px;
        height: 38px;
        border-radius: 8px;
        border: none;
        margin-bottom: 10px;
      }
      
      }
    button{
      width: 35%;
      border-radius: 8px;
      border:none;
      height: 48px;
      margin: 10px auto;
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
