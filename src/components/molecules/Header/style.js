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
  a {
    color: ${(p) => (p.dark ? "#000" : "#fff")};
  }
`;

export const ItemBar = styled.div`
  border-bottom: 1px solid transparent;
  transition: all 0.6s;
  /* a {
    color: #fff;
  } */

  &:hover {
    border-bottom-color: #fff;
  }
`;

export const Button = styled.div`
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 1rem;
    height: 1rem;
    background-color: ${(p) => (p.notif ? "tomato" : "transparent")};
    border-radius: 0.5rem;
  }

  img {
    z-index: 1;
    width: 2.5rem;
    height: 2.5rem;
    object-fit: cover;
  }
`;
