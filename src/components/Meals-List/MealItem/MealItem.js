import React from "react";
import "./MealItem.css";
import MealItemForm from "./MealItemForm";

function MealItem(props) {
  const amount = `Gel ${props.price.toFixed(2)}`;
  return (
    <li className="meal">
      <div>
        <h3>{props.name}</h3>
        <div className="description">{props.description}</div>
        <div className="price">{props.amount}</div>
      </div>
      <div>
        <MealItemForm info={props} />
      </div>
    </li>
  );
}

export default MealItem;
