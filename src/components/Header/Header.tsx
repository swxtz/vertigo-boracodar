import { Container } from "./styles";

import vertigoLogo from "@assets/logo.svg";

export function Header() {
  return (
    <Container>
      <img src={vertigoLogo} alt="Vertigo"  />
    </Container>
  );
}