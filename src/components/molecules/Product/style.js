import styled from "styled-components/macro";

export const Main = styled.div`
  padding: 8rem 12vw;
  text-align: center;
`;
export const Title = styled.h2`
  font-size: 2.4rem;
  margin-bottom: 4rem;
`;
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
`;

// Card
export const MainCard = styled.div`
  width: 24.5rem;
  &:hover {
    cursor: pointer;
    .hover-card {
      opacity: 1;
    }
  }
`;
export const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
  border-radius: 0.8rem;
  overflow: hidden;

  .hover-card {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: all 0.3s;
    img {
      width: 4rem;
      height: 4rem;
      color: #fff;
      fill: #fff;
    }
  }
`;
export const ImgCover = styled.img`
  width: 100%;
  object-fit: cover;
`;
