import styled from "styled-components/macro";

export const Content = styled.div`
  padding: 4rem 12vw;
  display: flex;
  gap: 3rem;
  h3 {
    font-size: 2.4rem;
    font-weight: 400;
    margin-bottom: 1.8rem;
  }
`;

export const ShoppingCart = styled.div`
  width: 65%;
  height: 12rem;
  border-radius: 1.5rem;
`;

export const ListTitle = styled.div`
  display: flex;
  gap: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  width: 100%;
  h4 {
    font-size: 1.6rem;
    font-weight: normal;
    &:nth-child(1) {
      width: 15%;
    }
    &:nth-child(2) {
      width: 35%;
    }
    &:nth-child(3) {
      width: 35%;
    }
    &:nth-child(4) {
      width: 15%;
    }
  }
`;

export const ListProduct = styled.div`
  width: 100%;

  .empty-title {
    display: block;
    margin: 8rem 0;
    text-align: center;
    font-weight: normal;
    a {
      color: #000;
    }
  }
`;
export const ItemProduct = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  height: 9rem;
  margin-top: 2rem;
`;
export const ImgProduct = styled.div`
  width: 15%;
  height: 100%;
  border-radius: 0.8rem;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const TitleProduct = styled.div`
  width: 35%;
  h5 {
    font-size: 2rem;
  }
  p {
    font-size: 1.8rem;
  }
`;
export const Price = styled.p`
  width: 35%;
  font-size: 1.8rem;
  font-weight: 600;
`;
export const Action = styled.div`
  width: 15%;
`;

export const BtnAction = styled.button`
  width: 3rem;
  height: 3rem;
  background-color: transparent;
  outline: 0;
  border: 0;
  cursor: pointer;
`;

export const ShippingDetails = styled.div`
  width: 35%;
  background-color: #f9f9f9;
  border-radius: 1.5rem;
  padding: 3.2rem;
`;

export const InputItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.8rem;
`;

export const Label = styled.label`
  font-size: 1.6rem;
`;
export const Input = styled.input`
  padding: 0.8rem 1.2rem;
  border: 1px solid rgba(0, 0, 0, 0.08);
  outline: none;
  border-radius: 0.8rem;
  font-size: 1.6rem;
  font-family: "Josefin Sans", sans-serif;

  &::placeholder {
    font-size: 1.4rem;
    color: rgba(0, 0, 0, 0.3);
  }

  &:focus {
    border: 1px solid rgba(188, 231, 240, 0.8);
  }
`;
export const ChooseItem = styled.div`
  margin-bottom: 1.8rem;
`;
export const WrapperItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;
export const Item = styled.div`
  width: 48%;
  height: 9rem;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.8rem;
  cursor: pointer;

  &:hover {
    border-color: #f9cada;
  }
`;
export const BtnChekout = styled.button`
  width: 100%;
  padding: 1.2rem;
  text-align: center;
  border-radius: 3rem;
  background-color: #f0f0f0;
  color: #d2d2d4;
  outline: none;
  border: 0;
  font-size: 1.8rem;
  font-weight: 500;
  cursor: pointer;
`;
