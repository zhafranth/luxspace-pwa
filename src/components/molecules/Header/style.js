import styled from "styled-components/macro";

export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12vw;
  height: 8rem;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;

  z-index: 2;
`;

export const Logo = styled.img``;

export const ContainerBar = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const ItemBar = styled.div`
  border-bottom: 1px solid transparent;
  transition: all 0.6s;
  a {
    color: #fff;
  }

  &:hover {
    border-bottom-color: #fff;
  }
`;
