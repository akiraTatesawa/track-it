import "../assets/GlobalStyles/reset.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import GlobalStyle from "../assets/GlobalStyles/GlobalStyles";
import Login from "./Login/Login";
import SignUp from "./SingUp/SignUp";

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
