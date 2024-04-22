import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [quantities, setQuantities] = useState({});

  const addToCart = (route) => {
    const existingItemIndex = cart.findIndex((item) => item.id === route.id);

    if (existingItemIndex !== -1) {
      setCart((prevCart) => {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: updatedCart[existingItemIndex].quantity + 1,
        };
        return updatedCart;
      });
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [route.id]: prevQuantities[route.id] + 1,
      }));
    } else {
      setCart((prevCart) => [...prevCart, { ...route, quantity: 1 }]);
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [route.id]: 1,
      }));
    }
  };

  const removeFromCart = (routeId) => {
    setCart((prevCart) => prevCart.filter((route) => route.id !== routeId));
    setQuantities((prevQuantities) => {
      const newQuantities = { ...prevQuantities };
      delete newQuantities[routeId];
      return newQuantities;
    });
  };

  const clearCart = () => {
    setCart([]);
    setQuantities({});
  };

  const cartData = {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    quantities,
  };

  return (
    <CartContext.Provider value={cartData}>{children}</CartContext.Provider>
  );
};

/* Here we are creating a CartContext using React's createContext

cartContext is used to share the cart data and related functions throughout the component tree
The CartProvider component wraps its children with the context provider, making the cart data and functions available to all descendant components that consume the context
The useCart custom hook is created to conveniently access the cart context within functional components
It utilizes the useContext hook to retrieve the context value provided by the nearest CartProvider ancestor
Effectively, useContext allows us to avoid prop drilling, where data is passed down through multiple layers of components 
Instead, components can directly access the cart data and functions they need without intermediate components having to pass them explicitly
In the project, useContext is particularly useful for managing global state, such as the shopping cart
It simplifies state management by centralizing the cart logic and providing a clean interface for components to interact with the cart state
This approach enhances code organization, readability, and maintainability by decoupling components from specific state management implementations

This React hook exists from use of W3School, ChatGPT, WebDevSimplified (YouTube channel), PedroTech (YouTube channel),  */
