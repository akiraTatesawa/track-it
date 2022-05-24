import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Main, Container, Button, Input } from "../Login/LoginStyle";
import logo from "../../assets/img/logo2.png";
import { ThreeDots } from "react-loader-spinner";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    email: "",
    name: "",
    image: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function handleError(error) {
    if (error.response.status === 409) {
      alert("Erro: usuário já cadastrado!");
    } else {
      alert("Erro: tente novamente!");
    }
    setInputs({ ...inputs, email: "", name: "", image: "", password: "" });
    setIsLoading(false);
  }

  function registerUser(e) {
    e.preventDefault();
    setIsLoading(true);
    const promise = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
      inputs
    );
    promise
      .then((response) => {
        console.log(response.data);
        setIsLoading(false);
        navigate("/");
      })
      .catch(handleError);
  }

  function handleChange(e) {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setInputs({ ...inputs, [inputName]: inputValue });
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
        <form onSubmit={registerUser}>
          <Input
            type="email"
            name="email"
            value={inputs.email}
            placeholder="email"
            onChange={handleChange}
            required
            disabled={isLoading}
          />
          <Input
            type="password"
            name="password"
            value={inputs.password}
            placeholder="senha"
            onChange={handleChange}
            required
            disabled={isLoading}
          />
          <Input
            type="text"
            name="name"
            value={inputs.name}
            placeholder="nome"
            onChange={handleChange}
            required
            disabled={isLoading}
          />
          <Input
            type="url"
            name="image"
            value={inputs.image}
            placeholder="foto"
            onChange={handleChange}
            required
            disabled={isLoading}
          />
          <Button type="submit">{buttonContent}</Button>
        </form>
        <Link to="/">
          <p>Já tem uma conta? Faça login!</p>
        </Link>
      </Container>
    </Main>
  );
};

export default SignUp;
