import styled from "styled-components/macro";

export const Main = styled.button`
  background-color: #f9cada;
  color: #110f0f;
  padding: 1.3rem 2.5rem;
  border-radius: 4rem;
  outline: none;
  border: 0;
  cursor: pointer;
  font-size: 1.4rem;
  transition: all 0.4s;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #110f0f;
    border-radius: 4rem;
    z-index: -1;
    opacity: 1;
    transition: all 0.4s;
  }

  &:hover {
    background-color: #110f0f;
    color: #f9cada;

    &::after {
      background-color: #f9cada;
      transform: scale(1.2);
      opacity: 0;
    }
  }
`;
