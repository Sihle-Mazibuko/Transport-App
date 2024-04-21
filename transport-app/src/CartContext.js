import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (route) => {
    setCart((prevCart) => [...prevCart, route]);
  };

  const removeFromCart = (routeId) => {
    setCart((prevCart) => prevCart.filter((route) => route.id !== routeId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartData = {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
  };

  return (
    <CartContext.Provider value={cartData}>{children}</CartContext.Provider>
  );
};
