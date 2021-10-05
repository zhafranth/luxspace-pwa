import React from "react";
import { Link } from "react-router-dom";
import { Main } from "./style";

const Breadcrumb = ({ tag }) => {
  return (
    <Main>
      <Link to="/">Home</Link> / <Link to="/profile">{tag}</Link>
    </Main>
  );
};

export default Breadcrumb;
