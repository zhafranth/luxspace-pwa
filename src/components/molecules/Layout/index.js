import React from "react";

// Components
import Footer from "../Footer";
import Modals from "../Modals";
import { Offline } from "../../atoms";

// Child Components
import { Main, Content } from "./style";

const Layout = ({ children, show, handleShowModals, status }) => {
  return (
    <Main>
      {status && <Offline />}
      {show && <Modals onClick={handleShowModals} />}
      <Content>{children}</Content>
      <Footer />
    </Main>
  );
};

export default Layout;
