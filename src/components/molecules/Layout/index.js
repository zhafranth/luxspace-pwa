import React from "react";

// Components
import Footer from "../Footer";

// Child Components
import { Main, Content } from "./style";

const Layout = ({ children }) => {
  return (
    <Main>
      <Content>{children}</Content>
      <Footer />
    </Main>
  );
};

export default Layout;
