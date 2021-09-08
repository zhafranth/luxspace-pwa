import React from "react";

// Child Components
import { MainCard, ImgWrapper, ImgCover } from "./style";

// Assets
import ImgProduct from "../../../assets/content/showcase-1.back.jpg";
import IlViewDetail from "../../../assets/content/visibility.svg";

const CardProduct = ({ data }) => {
  // const { name, price, image1 } = data;
  return (
    <MainCard>
      <ImgWrapper>
        <div className="hover-card">
          <img src={IlViewDetail} alt="view icon" />
        </div>
        <ImgCover src={data?.image1} alt="product image" />
      </ImgWrapper>
      <h3>{data?.name}</h3>
      <p>Rp {data?.price},-</p>
    </MainCard>
  );
};

export default CardProduct;
