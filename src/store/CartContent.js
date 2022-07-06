import React, { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider(props) {
  const [cartAmount, setCartAmount] = useState({
    items: [],
    totalAmount: 0,
    totalNumber: 0,
  });

  function addItemToCart(amount, info, id) {
    setCartAmount({
      ...cartAmount,
      items: [...cartAmount.items, { ...info, idx: id }],
      totalAmount: Number(info.price) * +amount + +cartAmount.totalAmount,
      totalNumber: 1 + +cartAmount.totalNumber,
    });
  }

  function removeItemToCart(id, totalPrice) {
    const remove = cartAmount.items.filter((item) => item.idx !== id);
    setCartAmount({
      items: remove,
      totalAmount: +cartAmount.totalAmount - totalPrice,
      totalNumber: +cartAmount.totalNumber - 1,
    });
  }

  return (
    <CartContext.Provider value={[cartAmount, addItemToCart, removeItemToCart]}>
      {props.children}
    </CartContext.Provider>
  );
}
