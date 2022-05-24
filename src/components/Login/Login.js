import { Link } from "react-router-dom";
import { Main, Container, Input, Button } from "./LoginStyle";
import logo from "../../assets/img/logo2.png";

const Login = () => {
  return (
    <Main>
      <Container>
        <img src={logo} alt="Logo da Track It" />
        <Input placeholder="email" />
        <Input placeholder="senha" />
        <Button>Entrar</Button>
        <Link to="/cadastro">
          <p>Não tem uma conta? Cadastre-se!</p>
        </Link>
      </Container>
    </Main>
  );
};

export default Login;
