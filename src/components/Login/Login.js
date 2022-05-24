import { Link, useNavigate } from "react-router-dom";
import { Main, Container, Input, Button } from "./LoginStyle";
import logo from "../../assets/img/logo2.png";
import { useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

const Login = () => {
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function login(e) {
    e.preventDefault();
    setIsLoading(true);
    const promise = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
      inputs
    );
    promise
      .then((response) => {
        setIsLoading(false);
        navigate("/hoje");
        console.log(response.data)
      })
      .catch(() => {
        alert("Erro! Tente novamente.");
        setInputs({ ...inputs, email: "", password: "" });
        setIsLoading(false);
      });
  }

  function changeButtonContent() {
    if (isLoading) {
      return <ThreeDots color="#FFFFFF" />;
    } else {
      return "Entrar";
    }
  }

  const buttonContent = changeButtonContent();

  return (
    <Main>
      <Container>
        <img src={logo} alt="Logo da Track It" />
        <form onSubmit={login}>
          <Input
            type="email"
            name="email"
            value={inputs.email}
            placeholder="email"
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
            required
            disabled={isLoading}
          />
          <Input
            type="password"
            name="password"
            value={inputs.password}
            placeholder="senha"
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            required
            disabled={isLoading}
          />
          <Button type="submit">{buttonContent}</Button>
          <Link to="/cadastro">
            <p>Não tem uma conta? Cadastre-se!</p>
          </Link>
        </form>
      </Container>
    </Main>
  );
};

export default Login;
