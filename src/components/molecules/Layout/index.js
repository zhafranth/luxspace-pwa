import React from "react";

// Components
import Footer from "../Footer";
import Modals from "../Modals";

// Child Components
import { Main, Content } from "./style";

const Layout = ({ children, show, handleShowModals }) => {
  return (
    <Main>
      {show && <Modals onClick={handleShowModals} />}
      <Content>{children}</Content>
      <Footer />
    </Main>
  );
};

export default Layout;
