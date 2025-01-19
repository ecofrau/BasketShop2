import React, { createContext, useState, useMemo } from "react";

export const CartStore = createContext();

export const CartStoreProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  const removeItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const totalPrice = useMemo(() => {
    return items.reduce((total, item) => total + item.price, 0);
  }, [items]);

  return (
    <CartStore.Provider value={{ items, addItem, removeItem, totalPrice }}>
      {children}
    </CartStore.Provider>
  );
};
