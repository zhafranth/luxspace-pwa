import React, { useEffect, useState } from "react";

// Components
import Footer from "../Footer";
import Modals from "../Modals";
import { Offline } from "../../atoms";
import Splash from "../../../pages/Splash";

// Child Components
import { Main, Content } from "./style";

const Layout = ({ children, show, handleShowModals, status }) => {
  const [splash, setSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 1500);
  }, []);
  if (splash) {
    return <Splash />;
  }
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
