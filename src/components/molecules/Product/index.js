import React, { useState, useEffect } from "react";
import Axios from "axios";

// Child Components
import { Main, Title, Container } from "./style.js";
import CardProduct from "./CardProduct";

const Product = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    Axios.get(
      "https://prod-qore-app.qorebase.io/8ySrll0jkMkSJVk/allItems/rows?limit=7&offset=0&$order=asc",
      {
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
          "x-api-key": "e12dae64-e563-4def-b98d-3779f81e31ee",
        },
      }
    )
      .then((res) => setItems(res.data.nodes))
      .catch((err) => console.log(err));
  }, []);

  console.log(items);
  return (
    <Main>
      <Title>
        Just Arrived <br />
        This Summer For You
      </Title>
      <Container>
        {items?.map((item, i) => (
          <CardProduct data={item} key={`product-${i}`} />
        ))}
      </Container>
    </Main>
  );
};

export default Product;
