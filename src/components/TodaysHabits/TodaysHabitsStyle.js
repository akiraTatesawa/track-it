import styled from "styled-components";

export const Main = styled.main`
  overflow: hidden;
  height: 100vh;
  background-color: #f2f2f2;
  padding: 100px 17px;
`;

export const Section = styled.section`
  h2 {
    color: #126ba5;
    font-size: 23px;
  }
`;

export const HabitsProgression = styled.p`
  color: ${props => props.status ? "#8FC549" : "#bababa"};
  font-size: 18px;
  margin-top: 5px;
`;
