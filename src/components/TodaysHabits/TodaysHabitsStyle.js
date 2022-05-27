import styled from "styled-components";

export const Main = styled.main`
  overflow-x: hidden;
  z-index: 1;
  height: 100vh;
  background-color: #f2f2f2;
  padding: 100px 17px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    color: #126ba5;
    font-size: 23px;
  }
`;

export const HabitsProgression = styled.p`
  color: ${(props) => (props.status ? "#8fc549" : "#bababa")};
  font-size: 18px;
  margin-top: 9px;
`;

export const TodaysHabitsSection = styled.section`
  width: 100%;
  height: auto;
  margin-top: 29px;
`;

export const TodaysHabitBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-height: 95px;
  background-color: #ffffff;
  border-radius: 5px;
  padding: 13px;
  margin-bottom: 10px;
  color: #666666;

  h3 {
    font-size: 20px;
    margin-bottom: 9px;
  }

  p {
    font-size: 13px;
    line-height: 16px;
  }
`;

export const CurrentSequence = styled.span`
  font-size: 13px;
  line-height: 16px;
  color: ${(props) => (props.done ? "#8FC549" : "#666666")};
`;

export const HighestSequence = styled(CurrentSequence)`
  font-size: 13px;
  line-height: 16px;
  color: ${(props) => (props.isEqual ? "#8FC549" : "#666666")};
`;
