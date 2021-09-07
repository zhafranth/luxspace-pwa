import React from "react";

// Components
import { LinkButton } from "../../atoms";

// Child Components
import {
  Main,
  Container,
  Content,
  ItemContent,
  Title,
  Copyright,
  SendEmail,
} from "./style";

// Assets
import Logo from "../../../assets/content/logo.png";
import IcSend from "../../../assets/content/icon-send.svg";

const Footer = () => {
  return (
    <Main>
      <Container>
        <img src={Logo} alt="logo luxspace" />
        <Content>
          <ItemContent>
            <Title>Overview</Title>
            <LinkButton to="/">Shipping</LinkButton>
            <LinkButton to="/">Refund</LinkButton>
            <LinkButton to="/">Promotion</LinkButton>
          </ItemContent>
          <ItemContent>
            <Title>Company</Title>
            <LinkButton to="/">About</LinkButton>
            <LinkButton to="/">Career</LinkButton>
            <LinkButton to="/">Contact Us</LinkButton>
          </ItemContent>
          <ItemContent>
            <Title>Explore</Title>
            <LinkButton to="/">Terms & Conds</LinkButton>
            <LinkButton to="/">Privacy</LinkButton>
            <LinkButton to="/">Policy</LinkButton>
          </ItemContent>
          <ItemContent>
            <Title>Special Letter</Title>
            <SendEmail>
              <input type="text" placeholder="Your Email Address" />
              <button>
                <img src={IcSend} alt="icon send" />
              </button>
            </SendEmail>
          </ItemContent>
        </Content>
      </Container>
      <Container>
        <Copyright>Copyright 2021 • All Rights Reserved LuxSpace</Copyright>
      </Container>
    </Main>
  );
};

export default Footer;
