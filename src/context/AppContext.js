import React, { createContext, useState, useEffect } from "react";

const AppContenxt = () => {
  const CartContext = createContext();
  const { Provider } = CartContext;

  const CartProvider = (props) => {
    const [cart, setCart] = useState([]);
    const cartChaced = window.localStorage.getItem("cart");

    const addItem = (newCart) => {
      setCart([...cart, newCart]);
      window.localStorage.setItem("cart", JSON.stringify([...cart, newCart]));
    };
    const removeItem = (id) => {
      const newData = cart.filter((item, i) => i !== id);
      window.localStorage.setItem("cart", JSON.stringify(newData));
      setCart(newData);
    };

    const CartState = { cart, addItem, removeItem };

    useEffect(() => {
      if (cartChaced !== null) {
        setCart(JSON.parse(cartChaced));
      }
    }, [cartChaced]);

    return <Provider value={CartState}>{props.children}</Provider>;
  };

  return {
    CartContext,
    CartProvider,
  };
};

export default AppContenxt();
