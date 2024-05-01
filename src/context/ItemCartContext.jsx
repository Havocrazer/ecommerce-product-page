import React, { createContext, useContext, useState } from "react";

const ItemCartContext = createContext();

export const useItemCartContext = () => useContext(ItemCartContext);

export const ItemCartProvider = ({ children }) => {
  const [quantity, setQuantity] = React.useState(0);
  const [price, setPrice] = React.useState(125);
  const [items, setItems] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  const addItem = (item) => {
    const existingItem = items.find((i) => i.name === item.name);
    if (existingItem) {
      const updatedItems = items.map((i) =>
        i.name === item.name
          ? { ...i, quantity: i.quantity + item.quantity }
          : i
      );
      setItems(updatedItems);
    } else {
      setItems([...items, item]);
    }
  };

  const removeItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <ItemCartContext.Provider
      value={{
        quantity,
        setQuantity,
        price,
        setPrice,
        items,
        addItem,
        removeItem,
        menuOpen,
        setMenuOpen,
      }}
    >
      {children}
    </ItemCartContext.Provider>
  );
};
