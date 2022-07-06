import React, { Fragment } from "react";
import mainImage from "../../images/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
import "./Header.css";

function Header({ seeCart }) {
  return (
    <Fragment>
      <header className="header">
        <h1>Meals For Your Body</h1>
        <HeaderCartButton seeCart={seeCart} />
      </header>
      <div className="main-image">
        <img src={mainImage} alt="Header main image" />
      </div>
    </Fragment>
  );
}

export default Header;
