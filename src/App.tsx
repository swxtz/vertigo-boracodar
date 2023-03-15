import { AppWrapper } from "styles/app";
import { Header } from "./components/Header/Header";
import { GlobalStyles } from "./styles/global";

import imgAside from "@assets/background-img.png";

export function App() {
  return (
    <AppWrapper>
      <div className="content">
        <GlobalStyles />
        <Header />
      </div>

      <div className="img-bg">
        <img src={imgAside} alt="" />
      </div>
    </AppWrapper>
  );
}
