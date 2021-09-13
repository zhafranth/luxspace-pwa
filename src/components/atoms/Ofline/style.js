import styled from "styled-components/macro";

export const Main = styled.div`
  position: relative;
  height: 5rem;
  display: flex;
  padding: 1.8rem;
  align-items: center;
  background-color: #fff;
  z-index: 99;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 0.7rem;
    height: 100%;
    background-color: #f6e05e;
  }

  img {
    width: 2rem;
    height: 2rem;
    margin-right: 1.2rem;
  }

  h2 {
    font-size: 1.4rem;
    font-weight: 400;
    color: #b7791f;
  }
`;
