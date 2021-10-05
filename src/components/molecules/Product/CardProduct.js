import React from "react";

// Depend
import { Link } from "react-router-dom";

// Child Components
import { MainCard, ImgWrapper, ImgCover } from "./style";

// Assets
import IlViewDetail from "../../../assets/content/visibility.svg";

const CardProduct = ({ data }) => {
  // const { name, price, image1 } = data;
  return (
    <Link to={{ pathname: `/details/${data.id}`, state: data }}>
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
    </Link>
  );
};

export default CardProduct;
