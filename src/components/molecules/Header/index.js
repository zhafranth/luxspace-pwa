import React, { useContext } from "react";

// Context
import AppContext from "../../../context/AppContext";

// Components
import { LinkButton } from "../../atoms";

// Child Components
import { Main, Logo, ContainerBar, ItemBar, Button } from "./style";

// Assets
import LogoIcon from "../../../assets/content/logo.png";
import IcCart from "../../../assets/content/shopping-cart.svg";

const { CartContext } = AppContext;

const Header = ({ dark }) => {
  const CartState = useContext(CartContext);
  return (
    <Main>
      <Logo src={LogoIcon} alt="Logo luxspace" />
      <ContainerBar dark={dark}>
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
        <Button notif={CartState.cart.length > 0}>
          <LinkButton to="/cart">
            <img src={IcCart} alt="shopping cart" />
          </LinkButton>
        </Button>
      </ContainerBar>
    </Main>
  );
};

export default Header;
