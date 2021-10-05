import styled from "styled-components/macro";

export const Main = styled.div`
  background-color: #f9f9f9;
  width: 100%;
  padding: 4rem 3rem;

  a {
    font-size: 1.8rem;
    text-decoration: none;
    color: #000040;
    &:first-child {
      margin-right: 2rem;
      font-weight: 300;
    }
    &:last-child {
      margin-left: 2rem;
      font-weight: 600;
    }
  }
`;
