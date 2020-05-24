import styled from 'styled-components';
import lens from '~/assets/lens.svg';

export const Container = styled.div`
  padding: 10px;

  h2{
    margin: 30px auto;
    text-align: center;
    color: #fff;
    font-size: 30px;
    text-shadow: 0px 0px 11px rgba(0,0,0,0.8);
  }
`;

export const OptionsBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  input {
    width: 220px;
    height: 30px;
    border-radius: 6px;
    border: none;
    background-image: url(${lens});
    background-repeat: no-repeat;
    background-position-x: 5px;
    background-position-y: 5px;
    background-size: 20px;
    padding: 0 0 0 30px;
  }

  button {
    background: #0ACA6E;
    border: none;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    margin: 20px 0;
  }
`;

export const MilitaryTable = styled.table`
  width: 100%;
  margin: 10px 0;
  vertical-align: center;
  text-align: center;
  border-collapse: separate;
  border-spacing: 0 15px;
  
  thead {

      th {
      color: #fff;
      font-weight: bold;
      padding-bottom: 10px;
    }

  }

  tbody{

    tr {
      background: #248D1A;
      height: 50px;

      td:first-child {
        border-top-left-radius: 8px; 
        border-bottom-left-radius: 8px;
    }
      td:last-child {
        border-bottom-right-radius: 8px; 
        border-top-right-radius: 8px; 
    }
      
      td {
        color: #fff;

      img{
      width: 30px;
      height: 30px;
      }

    }
  }
    
  }
  
`;