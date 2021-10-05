import styled from "styled-components/macro";

export const Content = styled.div`
  margin-top: 8rem;
  padding: 0 12vw;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;

export const ContentImage = styled.div`
  display: flex;
  gap: 1rem;
  height: 70vh;
  width: 50%;
`;

export const ListImage = styled.div`
  height: 100%;
  width: 20%;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 2rem 0;
`;

export const ItemImage = styled.div`
  width: 100%;
  height: 20%;
  border-radius: 1rem;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0.5rem 1.2rem rgba(0, 0, 0, 0.2);
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const FullViewImage = styled.div`
  height: 100%;
  width: 80%;
  border-radius: 1rem;
  overflow: hidden;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
export const ContentInfo = styled.div`
  width: 50%;
`;
export const SectionPrice = styled.div`
  color: #000;
  margin-bottom: 2.5rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  h3 {
    font-size: 3.8rem;
    font-weight: 700;
  }
  p {
    font-size: 2.2rem;
    font-weight: normal;
    margin-bottom: 3rem;
  }
`;
export const SectionInfoProduct = styled.div`
  h5 {
    font-size: 2rem;
    font-weight: 600;
  }
  p {
    font-size: 1.6rem;
    font-weight: normal;
    line-height: 2.8rem;
  }
`;
