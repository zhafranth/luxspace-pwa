import React from "react";
import { Main } from "./style";

const Button = ({ children, onClick }) => {
  return <Main onClick={onClick}>{children}</Main>;
};

export default Button;
