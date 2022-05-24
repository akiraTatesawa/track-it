import styled from "styled-components";

import UserContext from "../../contexts/UserContext";
import { useContext } from "react";

const Header = () => {
  const { userData } = useContext(UserContext);

  return (
    <HeaderContainer>
      <h1>TrackIt</h1>
      <img src={userData.image} alt="User profile" />
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #126ba5;
  height: 70px;
  width: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  padding: 11px 18px;

  h1 {
    font-family: "Playball", cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    color: #ffffff;
  }

  img {
    width: 51px;
    height: 51px;
    border-radius: 100px;
  }
`;
