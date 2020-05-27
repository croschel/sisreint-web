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

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    justify-content: flex-end;
    margin:0 350px 0 50px;
    

    div {
      padding: 10px;
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: flex-end;

      label {
        margin-right: 5px;
        color: #fff;
        font-weight: bold;
        width: auto;
        text-align: right;
      }
      input {
        width: 350px;
        justify-content: flex-end;
        min-width: 350px;
        height: 38px;
        border-radius: 8px;
        border: none;
        padding: 10px;
        color: #777777;
      }
      select {
        width: 350px;
        justify-content: flex-end;
        min-width: 250px;
        height: 38px;
        border-radius: 8px;
        border: none;
        background: #fff;
        padding: 10px;
        color: #777777;
        min-width: 350px;

      }

    }
    
    button{  
      width: 280px;
      align-self: flex-end;
      border-radius: 8px;
      border:none;
      height: 48px;
      color: #fff;
      font-weight: bold;
      font-size: 20px;
      min-width: 280px;
      margin-right: 50px;
      margin-bottom: 10px;
    }
    button:first-of-type{
      background: #AEB11B;
      margin-top: 20px;
    }
    button:last-of-type{
      background: #E63737;
    }
  }
  @media screen and (min-width:800px) and (max-width: 1500px){
    form{
      margin:0 100px 0 50px;

    }
      
    }
`;
