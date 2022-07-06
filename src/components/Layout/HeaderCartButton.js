import React, { useContext } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import "./HeaderCartButton.css";
import { CartContext } from "../../store/CartContent";

function HeaderCartButton({ seeCart }) {
  const [cartAmount] = useContext(CartContext);

  const numberOfCartItems = cartAmount.totalNumber;

  return (
    <button className="button" onClick={seeCart}>
      <span className="icon">
        <FaCartArrowDown className="button-icon" />
      </span>
      <span>Your Cart</span>
      <span className="badge">{numberOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;
