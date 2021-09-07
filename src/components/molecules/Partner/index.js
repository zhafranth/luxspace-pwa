import React from "react";

// Child Components
import { Main, Container } from "./style";

// Assets
import LogoAdobe from "../../../assets/content/logo-adobe.svg";
import LogoIkea from "../../../assets/content/logo-ikea.svg";
import LogoHermanmiller from "../../../assets/content/logo-hermanmiller.svg";
import LogoMiele from "../../../assets/content/logo-miele.svg";

const Partner = () => {
  return (
    <Main>
      <Container>
        <img src={LogoAdobe} alt="adobe logo" />
        <img src={LogoIkea} alt="ikea logo" />
        <img src={LogoHermanmiller} alt="hermanmiller logo" />
        <img src={LogoMiele} alt="miele logo" />
      </Container>
    </Main>
  );
};

export default Partner;
