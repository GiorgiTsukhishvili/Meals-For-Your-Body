import React, { useContext } from "react";
import "./CartItem.css";
import { CartContext } from "../../store/CartContent";

const CartItem = ({ info }) => {
  const [cartAmount, addItemToCart, removeItemToCart] = useContext(CartContext);

  const price = `Gel ${info.price}`;

  function onRemove() {
    const totalPrice = info.price * info.amount;

    removeItemToCart(info.idx, totalPrice);
  }

  return (
    <li className="cart-itemss">
      <div>
        <h2>{info.name}</h2>
        <div className="cart-summary">
          <span className="price">{price}</span>
          <span className="amount">x {info.amount}</span>
        </div>
      </div>
      <div className="actions">
        <button onClick={onRemove} className="cart-action-button">
          −
        </button>
      </div>
    </li>
  );
};

export default CartItem;
