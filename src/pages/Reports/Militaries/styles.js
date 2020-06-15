import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background:#fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  h2 {
    text-align: center;
    font-size: 20px;
  }
`;

export const Content = styled.div`
  width: 100%;
  margin-top: 20px;

  h3 {
    text-align: center;
    margin-bottom: 20px;
  }
`;
export const HeaderImg = styled.img`
  width: 150px;
  height: 150px;
  margin: 0 auto;
`;
export const MilitariesTable = styled.table`
  border-collapse: collapse;
  border: solid 1px #000;
  width: 100%;
  padding: 5px;
  
  
  th{
    border: solid 1px #000;
    height: 50px;
    padding: 5px;
  }

  tr{
    border: solid 1px #000;

    td{
      border: solid 1px #000;
      text-align: center;
      height: 35px;
      padding: 5px;
    }
  }
`;

export const Signature = styled.div`
  text-align: center;
  border-top: solid 1px #000;
  width: 500px;
  margin: 100px auto 0 auto;

  h2{
    margin-top: 3px;
    font-size: 20px;
  }
  p{
    font-size: 18px;
  }
`;