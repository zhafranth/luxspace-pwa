import React from "react";
import { Main } from "./style";

// Assets
import IcAlert from "../../../assets/content/caution.svg";

const Offline = () => {
  return (
    <Main>
      <img src={IcAlert} alt="cation alert" />
      <h2>You are offline. Don't you worry, you still can do things.</h2>
    </Main>
  );
};

export default Offline;
