import styled from "styled-components/macro";

export const Main = styled.div``;
export const Container = styled.div`
  padding: 4rem 12vw;
  border-top: 1px solid #d4d4d4;
  text-align: center;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;
`;
export const ItemContent = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;
export const Title = styled.h4``;
export const Copyright = styled.p``;

export const SendEmail = styled.div`
  background-color: #f9f9f9;
  display: flex;
  align-items: center;
  height: 4rem;
  border-radius: 0.8rem;

  input {
    outline: none;
    border: 0;
    background-color: #f9f9f9;
    padding: 0 1rem;
    &::placeholder {
      color: #d7d4d2;
      font-size: 1.6rem;
      font-weight: 400;
    }
  }

  button {
    width: 4rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f9cada;
    border-radius: 0.8rem;
    outline: none;
    border: 0;
  }
`;
