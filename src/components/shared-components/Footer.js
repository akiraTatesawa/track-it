import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <Link to="/habitos">
        <span>Hábitos</span>
      </Link>
      <Link to="/hoje">
        <span>Hoje</span>
      </Link>
      <span>Histórico</span>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  position: fixed;
  z-index: 2;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  padding: 23px 36px;
  background-color: #ffffff;

  span {
    font-size: 18px;
    color: #52b6ff;
  }

  a {
    text-decoration: none;
  }
`;
