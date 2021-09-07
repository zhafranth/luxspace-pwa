import styled from "styled-components/macro";

export const Main = styled.div``;

export const Container = styled.div`
  height: 90vh;
  display: flex;
`;

export const Content = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  text-align: center;
  h2 {
    line-height: 3.6rem;
    font-size: 4rem;
    width: 60%;
  }

  p {
    width: 60%;
    font-size: 1.8rem;
  }
`;

export const ImgWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
  .icons-play {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .button {
      width: 8rem;
      height: 8rem;
      background-color: #bce7f0;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 4rem;
      cursor: pointer;
    }
  }
`;

export const ImgCover = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
