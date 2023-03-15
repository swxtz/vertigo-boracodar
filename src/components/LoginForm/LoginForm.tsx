import { Header } from "components/Header/Header";
import { Container } from "./styles";

export function LoginForm() {
  return (
    <Container>
      <Header />

      <div className="header">
        <h2>Acesse a plataforma</h2>
        <p>
          Faça login ou registre-se para começar a construir seus projetos ainda hoje.
        </p>
      </div>
      <div className="inputs">

      </div>
    </Container>
  );
}
