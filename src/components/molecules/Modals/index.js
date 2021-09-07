import React from "react";
import { Main, Content } from "./style";

const Modals = ({ onClick }) => {
  return (
    <Main onClick={onClick}>
      <Content>
        <iframe
          title="video"
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/3h0_v1cdUIA"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </Content>
    </Main>
  );
};

export default Modals;
