import styled from "styled-components";

export const Main = styled.main`
  overflow-x: hidden;
  z-index: 1;
  height: 100vh;
  background-color: #f2f2f2;
  padding: 100px 17px 120px 17px;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

export const TitleHabits = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    color: #126ba5;
    font-size: 23px;
  }

  button {
    width: 30px;
    height: 30px;
    padding: 0;
    margin: 0;
    border: none;
    background-color: #ffffff;
  }
`;

export const HabitsList = styled.div`
  margin-top: 30px;

  p {
    font-size: 18px;
    color: #666666;
    line-height: 23px;
  }
`;

export const HabitCreationBox = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  width: 100%;
  height: 180px;
  background-color: #ffffff;
  border-radius: 5px;
  padding: 18px;
  margin-bottom: 29px;
  transition: all 200ms ease;

  form {
    width: 100%;
    height: 100%;
    position: relative;
  }

  input[type="text"] {
    width: 100%;
    height: 45px;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    outline: none;
    color: #666666;
    font-size: 20px;
    padding: 11px;
    margin-bottom: 8px;

    &:disabled {
      background-color: #f2f2f2;
      color: #afafaf;
    }

    &::placeholder {
      color: #dbdbdb;
      font-size: 20px;
    }
  }
`;

export const WeekdayButton = styled.input`
  width: 30px;
  height: 30px;
  background-color: ${(props) => (props.isSelected ? "#cfcfcf" : "#ffffff")};
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  color: ${(props) => (props.isSelected ? "#ffffff" : "#dbdbdb")};
  font-size: 20px;
  padding: 0;
  text-align: center;
  line-height: 30px;
  margin-right: 5px;
`;

export const CancelButton = styled.input`
  display: inline-block;
  position: absolute;
  bottom: 0;
  right: 84px;
  margin-right: 23px;
  width: 69px;
  height: 35px;
  background-color: #ffffff;
  border: none;
  font-size: 16px;
  color: #52b6ff;
  text-align: center;
  padding: 0;
  line-height: 35px;
`;

export const SubmitButton = styled.button`
  position: absolute;
  display: inline-block;
  right: 0;
  bottom: 0;
  width: 84px;
  height: 35px;
  background-color: #52b6ff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  color: #ffffff;
  text-align: center;
  padding: 0;
  line-height: 35px;

  &:disabled {
    background-color: ${(props) => (props.isLoading ? "#52b6ff" : "#d5dde3")};
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const HabitContainer = styled.div`
  display: ${(props) => (props.isDeleted ? "none" : "block")};
  width: 100%;
  min-height: 91px;
  background-color: #ffffff;
  border-radius: 5px;
  padding: 13px 15px;
  margin-bottom: 10px;

  div {
    position: relative;
  }

  h3 {
    font-size: 20px;
    color: #666666;
    margin-bottom: 12px;
    word-wrap: break-word;
    padding-right: 15px;
  }

  .trash-icon {
    position: absolute;
    top: 0;
    right: 0;
    color: #666666;
  }
`;

export const WeekdayListItem = styled.li`
  display: inline-block;
  width: 30px;
  height: 30px;
  background-color: ${(props) => (props.isSelected ? "#cfcfcf" : "#ffffff")};
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  color: ${(props) => (props.isSelected ? "#ffffff" : "#dbdbdb")};
  font-size: 20px;
  padding: 0;
  text-align: center;
  line-height: 30px;
  margin-right: 5px;
`;
