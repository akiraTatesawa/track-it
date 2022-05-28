import styled from "styled-components";

const History = () => {
  return (
    <Main>
      <h2>Histórico</h2>
      <Section>
        <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
      </Section>
    </Main>
  );
};

export default History;

const Main = styled.main`
  overflow-x: hidden;
  z-index: 1;
  height: 100vh;
  background-color: #f2f2f2;
  padding: 100px 17px 120px 17px;

  h2 {
    color: #126ba5;
    font-size: 23px;
    line-height: 29px;
  }
`;

const Section = styled.section`
  width: 100%;
  margin-top: 17px;

  p {
    color: #666666;
    font-size: 18px;
    line-height: 22px;
  }
`;
