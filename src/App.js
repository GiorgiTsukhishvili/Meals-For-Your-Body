import Header from "./components/Layout/Header";
import Meals from "./components/Meals-List/Meals";
import Cart from "./components/Cart/Cart";
import { Fragment, useState } from "react";
import { CartProvider } from "./store/CartContent";

function App() {
  const [cartVisibility, setCartVisibility] = useState(false);

  function seeCart() {
    setCartVisibility((prevState) => !prevState);
  }

  return (
    <CartProvider>
      {cartVisibility && <Cart seeCart={seeCart} />}
      <Header seeCart={seeCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
