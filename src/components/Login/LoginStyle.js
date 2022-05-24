import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 36px;

  img {
    width: 180px;
    height: 179px;
  }

  a {
    margin-top: 25px;
  }

  p {
    color: #52b6ff;
    font-size: 14px;
    text-decoration: underline;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Input = styled.input`
  width: 100%;
  max-width: 303px;
  height: 45px;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  outline: none;
  color: #666666;
  font-size: 20px;
  padding: 11px;
  margin: 6px 0;

  &:disabled {
    background-color: #f2f2f2;
    color: #afafaf;
  }

  &::placeholder {
    color: #dbdbdb;
    font-size: 20px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 303px;
  height: 45px;
  background-color: #52b6ff;
  border-radius: 5px;
  border: none;
  color: #ffffff;
  font-size: 21px;
  text-align: center;
`;
