import "../assets/GlobalStyles/reset.css";
import GlobalStyle from "../assets/GlobalStyles/GlobalStyles";

import { Routes, Route, useLocation } from "react-router-dom";
import { Fragment, useState } from "react";
import UserContext from "../contexts/UserContext";

import Login from "./Login/Login";
import SignUp from "./SingUp/SignUp";
import TodaysHabits from "./TodaysHabits/TodaysHabits";
import Habits from "./Habits/Habits";
import History from "./HabitsHistory/History";
import Header from "./shared-components/Header";
import Footer from "./shared-components/Footer"

const App = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    image: "",
    token: "",
  });
  const [habits, setHabits] = useState({completed: 0, total: 0, ratio: 0});
  const location = useLocation();

  function renderHeader() {
    if (location.pathname !== "/" && location.pathname !== "/cadastro") {
      return <Header />;
    } else {
      return undefined;
    }
  }

  function renderFooter() {
    if (location.pathname !== "/" && location.pathname !== "/cadastro") {
      return <Footer />;
    } else {
      return undefined;
    }
  }

  const footer = renderFooter();
  const header = renderHeader();

  return (
    <Fragment>
      <GlobalStyle />
      <UserContext.Provider value={{ userData, setUserData, habits, setHabits }}>
        {header}

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<SignUp />} />
          <Route path="/hoje" element={<TodaysHabits />} />
          <Route path="/habitos" element={<Habits />} />
          <Route path="/historico" element={ <History /> } />
        </Routes>
        
        {footer}
      </UserContext.Provider>
    </Fragment>
  );
};

export default App;
