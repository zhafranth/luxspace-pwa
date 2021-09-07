import styled from "styled-components/macro";

export const Main = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 99;
`;

export const Content = styled.div`
  width: 40vw;
  height: 50vh;
`;
