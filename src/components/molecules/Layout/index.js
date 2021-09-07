import React from "react";
import { Main, Content, Footer } from "./style";

const Layout = ({ children }) => {
  return (
    <Main>
      <Content>{children}</Content>
      <Footer></Footer>
    </Main>
  );
};

export default Layout;
