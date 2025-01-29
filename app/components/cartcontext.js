'use client';
import React, { createContext, useContext, useState } from 'react';

import BraceletExample from '../src/bracelet_ex.png'

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Bracelet A", price: 30, image: BraceletExample },
    { id: 2, name: "Bracelet B", price: 40, image: BraceletExample },
    { id: 3, name: "Bracelet C", price: 50, image: BraceletExample },
  ]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const updateCartItemCount = (id, count) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, count: Math.max(count, 1) } : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateCartItemCount }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

