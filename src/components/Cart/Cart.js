import React, { useContext } from "react";
import { CartContext } from "../../store/CartContent";
import Modal from "../UI-Components/Modal";
import "./Cart.css";
import CartItem from "./CartItem";

function Cart({ seeCart }) {
  const [cartAmount] = useContext(CartContext);

  const hasItems = cartAmount.items.length > 0;

  return (
    <Modal seeCart={seeCart}>
      <ul className="cart-items">
        {cartAmount.items.map((meal, i) => {
          return <CartItem info={meal} key={i} />;
        })}
      </ul>
      <div className="total">
        <span>Total Amount</span>
        <span>Gel {cartAmount.totalAmount}</span>
      </div>
      <div className="actions">
        <button className="button--alt" onClick={seeCart}>
          Close
        </button>
        {hasItems && <button className="button--order">Order</button>}
      </div>
    </Modal>
  );
}

export default Cart;
