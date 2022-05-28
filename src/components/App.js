import "../assets/GlobalStyles/reset.css";
import GlobalStyle from "../assets/GlobalStyles/GlobalStyles";

import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { Fragment, useState, useEffect } from "react";
import UserContext from "../contexts/UserContext";

import Login from "./Login/Login";
import SignUp from "./SingUp/SignUp";
import TodaysHabits from "./TodaysHabits/TodaysHabits";
import Habits from "./Habits/Habits";
import History from "./HabitsHistory/History";
import Header from "./shared-components/Header";
import Footer from "./shared-components/Footer";

const App = () => {
  const [userData, setUserData] = useState(searchUserDataOnLocalStorage);
  const [habits, setHabits] = useState({ completed: 0, total: 0, ratio: 0 });
  const location = useLocation();
  const navigate = useNavigate();
  
  function searchUserDataOnLocalStorage() {
    if (JSON.parse(localStorage.getItem("userData"))) {
      return JSON.parse(localStorage.getItem("userData"));
    } else {
      return { name: "", email: "", image: "", token: "" };
    }
  }

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

  useEffect(() => {
    if (userData.token === "" && location.pathname !== "/" && location.pathname !== "/cadastro") {
      alert("Você não está logado! Faça login para continuar");
      navigate("/");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <Fragment>
      <GlobalStyle />
      <UserContext.Provider
        value={{ userData, setUserData, habits, setHabits }}
      >
        {header}

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<SignUp />} />
          <Route path="/hoje" element={<TodaysHabits />} />
          <Route path="/habitos" element={<Habits />} />
          <Route path="/historico" element={<History />} />
        </Routes>

        {footer}
      </UserContext.Provider>
    </Fragment>
  );
};

export default App;
