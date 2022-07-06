import React, { useContext, useRef } from "react";
import "./MealItemForm.css";
import Input from "../../UI-Components/Input";
import { CartContext } from "../../../store/CartContent";
import { v4 as uuidv4 } from "uuid";

function MealItemForm(props) {
  const amountInput = useRef();

  const [cartAmount, addItemToCart] = useContext(CartContext);

  function submitForm(event) {
    event.preventDefault();
    const amount = amountInput.current.value;
    addItemToCart(amount, { ...props.info, amount }, uuidv4());
  }

  return (
    <form className="form" onSubmit={(e) => submitForm(e)}>
      <Input
        ref={amountInput}
        label="Amount"
        input={{
          id: "amount",
          type: "null",
          min: "1",
          max: "50",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Add</button>
    </form>
  );
}

export default MealItemForm;
