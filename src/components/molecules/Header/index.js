import React from "react";

// Components
import { LinkButton } from "../../atoms";

// Child Components
import { Main, Logo, ContainerBar, ItemBar } from "./style";

// Assets
import LogoIcon from "../../../assets/content/logo.png";
const Header = () => {
  return (
    <Main>
      <Logo src={LogoIcon} alt="Logo luxspace" />
      <ContainerBar>
        <ItemBar>
          <LinkButton to="/">Showcase</LinkButton>
        </ItemBar>
        <ItemBar>
          <LinkButton to="/">Catalog</LinkButton>
        </ItemBar>
        <ItemBar>
          <LinkButton to="/">Delivery</LinkButton>
        </ItemBar>
        <ItemBar>
          <LinkButton to="/profile">Profile</LinkButton>
        </ItemBar>
      </ContainerBar>
    </Main>
  );
};

export default Header;
