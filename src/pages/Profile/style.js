import styled from "styled-components/macro";

export const Main = styled.div`
  margin-top: 10rem;
`;

export const BreadCrumb = styled.div`
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

export const Content = styled.div`
  padding: 8rem 12vw;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
export const ProfileSection = styled.div`
  img {
    border-radius: 8rem;
  }
  h5 {
    font-size: 3rem;
    font-weight: 700;
  }
  p {
    font-size: 1.8rem;
    font-weight: normal;
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
`;
export const ItemButton = styled.div`
  text-align: left;
  h4 {
    margin-bottom: 2.6rem;
    cursor: pointer;
  }
  &:last-child {
    h4 {
      font-weight: 300;
    }
  }
`;
