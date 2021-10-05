import React from "react";
import styled from "styled-components/macro";

const Main = styled.div`
  width: ${(p) => p.width || "100%"};
  height: ${(p) => p.height || "100%"};
`;

const Gap = ({ width, height }) => {
  return <Main width={width} height={height} />;
};

export default Gap;
