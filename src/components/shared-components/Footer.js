import { Link } from "react-router-dom";
import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import UserContext from "../../contexts/UserContext";
import { useContext } from "react";

const Footer = () => {
  const { habits } = useContext(UserContext);

  return (
    <FooterContainer>
      <Link to="/habitos" title={"Hábitos"}>
        <span>Hábitos</span>
      </Link>
      <div>
        <Link to="/hoje" title={"Hoje"}>
          <CircularProgressbar
            value={Math.round(habits.ratio * 100)}
            text={"Hoje"}
            background
            backgroundPadding={6}
            styles={buildStyles({
              backgroundColor: "#52b6ff",
              textColor: "#fff",
              pathColor: "#fff",
              trailColor: "transparent",
            })}
          />
        </Link>
      </div>

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

  div {
    width: 90px;
    height: 140px;
  }
`;
