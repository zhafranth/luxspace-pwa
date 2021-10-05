import React, { useContext } from "react";

// Depen
import { Link } from "react-router-dom";

// Context
import AppContext from "../../context/AppContext";

// Components
import { Layout, Breadcrumb, Header, Gap } from "../../components";

// Child Components
import {
  Content,
  ShoppingCart,
  ShippingDetails,
  InputItem,
  Label,
  Input,
  ChooseItem,
  WrapperItem,
  Item,
  BtnChekout,
  ListTitle,
  ListProduct,
  ItemProduct,
  ImgProduct,
  TitleProduct,
  Price,
  Action,
  BtnAction,
} from "./style";

// Asset Image
import LogoFedex from "../../assets/content/logo-fedex.svg";
import LogoDhl from "../../assets/content/logo-dhl.svg";
import LogoMidtrans from "../../assets/content/logo-midtrans.png";
import LogoMastercard from "../../assets/content/logo-mastercard.svg";
import LogoBitcoin from "../../assets/content/logo-bitcoin.svg";
import LogoAmericanExpress from "../../assets/content/logo-american-express.svg";
// import CoverProduct from "../../assets/content/showcase-1.front.jpg";
import IcCancel from "../../assets/content/cancel.svg";

const { CartContext } = AppContext;

const Cart = () => {
  const { cart, removeItem } = useContext(CartContext);

  console.log(cart);
  return (
    <Layout>
      <Header dark />
      <Gap height="12rem" />
      <Breadcrumb tag="Details" />
      <Content>
        {/* Shoping Cart */}
        <ShoppingCart>
          <h3>Shopping Cart</h3>
          <ListTitle>
            <h4>Photo</h4>
            <h4>Product</h4>
            <h4>Price</h4>
            <h4>Action</h4>
          </ListTitle>
          <ListProduct>
            {cart?.length === 0 && (
              <h4 className="empty-title">
                Ooops... Cart is empty. <Link to="/">Shop Now</Link>
              </h4>
            )}
            {cart?.map((item, index) => (
              <ItemProduct key={`product-${index}`}>
                <ImgProduct>
                  <img src={item.image1} alt="product" />
                </ImgProduct>
                <TitleProduct>
                  <h5>{item.name}</h5>
                  <p>Office Room</p>
                </TitleProduct>
                <Price>Rp {item.price},00</Price>
                <Action>
                  <BtnAction onClick={() => removeItem(index)}>
                    <img src={IcCancel} alt="icon close" />
                  </BtnAction>
                </Action>
              </ItemProduct>
            ))}
          </ListProduct>
        </ShoppingCart>

        {/* Shipping Details */}
        <ShippingDetails>
          <h3>Shipping Details</h3>
          <InputItem>
            <Label>Complete Name</Label>
            <Input type="text" placeholder="Input your name" />
          </InputItem>
          <InputItem>
            <Label>Email Address</Label>
            <Input type="email" placeholder="Input your email address" />
          </InputItem>
          <InputItem>
            <Label>Address</Label>
            <Input type="text" placeholder="Input your address" />
          </InputItem>
          <InputItem>
            <Label>Phone Number</Label>
            <Input type="number" placeholder="Input your phone number" />
          </InputItem>
          <ChooseItem>
            <Label>Choose Courier</Label>
            <WrapperItem>
              <Item>
                <img src={LogoFedex} alt="Fedex" />
              </Item>
              <Item>
                <img src={LogoDhl} alt="DHL" />
              </Item>
            </WrapperItem>
          </ChooseItem>
          <ChooseItem>
            <Label>Choose Payment</Label>
            <WrapperItem>
              <Item>
                <img src={LogoMidtrans} alt="Logo Midtrans" />
              </Item>
              <Item>
                <img src={LogoMastercard} alt="Logo Master Card" />
              </Item>
              <Item>
                <img src={LogoBitcoin} alt="Logo Bitcoins" />
              </Item>
              <Item>
                <img src={LogoAmericanExpress} alt="Logo American Express" />
              </Item>
            </WrapperItem>
          </ChooseItem>
          <BtnChekout>Chekout Now</BtnChekout>
        </ShippingDetails>
      </Content>
    </Layout>
  );
};

export default Cart;
