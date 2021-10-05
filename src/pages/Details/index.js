import React, { useState, useEffect, useLayoutEffect, useContext } from "react";

// Context
import AppContext from "../../context/AppContext";

// Depen
import { useHistory } from "react-router-dom";

// Components
import { Layout, Header, Button, Breadcrumb, Gap } from "../../components";

// Child Componetns
import {
  Content,
  ContentImage,
  ContentInfo,
  ListImage,
  ItemImage,
  FullViewImage,
  SectionPrice,
  SectionInfoProduct,
} from "./style";

const { CartContext } = AppContext;

const Details = ({ location }) => {
  const [fullImage, setFullImage] = useState("");
  const { addItem } = useContext(CartContext);
  const { description, name, price, image1, image2, image3, image4, image5 } =
    location.state;

  const history = useHistory();

  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [history]);

  useEffect(() => {
    setFullImage(image1);
  }, [image1]);
  return (
    <Layout>
      <Header dark />
      <Gap height="8rem" />
      <Breadcrumb tag="Details" />
      <Content>
        <ContentImage>
          <ListImage>
            <ItemImage onClick={() => setFullImage(image1)}>
              <img src={image1} alt="front" />
            </ItemImage>
            <ItemImage onClick={() => setFullImage(image2)}>
              <img src={image2} alt="back" />
            </ItemImage>
            <ItemImage onClick={() => setFullImage(image3)}>
              <img src={image3} alt="rear" />
            </ItemImage>
            <ItemImage onClick={() => setFullImage(image4)}>
              <img src={image4} alt="side" />
            </ItemImage>
            <ItemImage onClick={() => setFullImage(image5)}>
              <img src={image5} alt="top" />
            </ItemImage>
          </ListImage>
          <FullViewImage>
            <img src={fullImage} alt="full view" />
          </FullViewImage>
        </ContentImage>
        <ContentInfo>
          <SectionPrice>
            <h3>{name}</h3>
            <p>Rp {price},-</p>

            <Button onClick={() => addItem(location.state)}>Add to Cart</Button>
          </SectionPrice>
          <SectionInfoProduct>
            <h5>About the Product</h5>
            <p>{description}</p>
          </SectionInfoProduct>
        </ContentInfo>
      </Content>
    </Layout>
  );
};

export default Details;
