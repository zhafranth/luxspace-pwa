import React from "react";
import { Main } from "./style";

import Logo from "../../assets/content/logo.png";

const Splash = () => {
  return (
    <Main>
      <img src={Logo} alt="logo Lux Space" />
      <h4>
        Kami menyediakan furniture berkelas yang membuat ruangan terasa homy
      </h4>
    </Main>
  );
};

export default Splash;
