import Header from "./components/Header";
import CartCheckout from "./components/CartCheckout";
import AddToCart from "./components/AddToCart";
import { useState } from "react";
import Product from "./components/Product";

function App() {
  const [cartCount, setCartCount] = useState(5);
  const [priceWithDiscount, setPriceWithDiscount] = useState(125);
  const [total, setTotal] = useState(priceWithDiscount * cartCount);
  const [InitialPrice, setInitialPrice] = useState(250);
  const [discount, setDiscount] = useState();

  // Fix the function name here
  function updateCartCount(newCount) {
    setCartCount(newCount);
  }

  return (
    <div>
      <Header cartCount={cartCount} />
      <div className={"relative"}>
        <Product />
      </div>
      <div className={"absolute top-72px left-0 right-0"}>
        <CartCheckout
          cartCount={cartCount}
          updateCartCount={updateCartCount}
          price={priceWithDiscount.toFixed(2)}
          total={total.toFixed(2)}
        />
      </div>
      <AddToCart cartCount={cartCount} updateCartCount={updateCartCount} />
    </div>
  );
}

export default App;
