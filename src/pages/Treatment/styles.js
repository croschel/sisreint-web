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
    padding: 5px;
  }
`;

export const TreatmentTable = styled.table`
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

        button{
          background: transparent;
          border: none;
        }

      img{
      width: 30px;
      height: 30px;
      }

    }
  }
    
  }
  
`;

export const ViewBox = styled.div` 
  
  display: ${props => props.visible ? 'flex' : 'none'};
  background-color: #000;
  margin: 0 auto;
  box-shadow: 0 0 0 99999px rgba(0,0,0,0.6);

#content{
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 15%;
  left: 35%;
  z-index: 1;
  width: auto;
  background-color: rgba(0,0,0,0.95);
  border-radius: 12px;
  padding: 20px;

    & > div {
      display: flex;
      flex-direction: row;
      margin: 10px;
      color: #f1f1f1;
      justify-content: space-between;
      
      p{
        text-align: left;
        margin-left: 20px;
      }
    }
  }
  
`;