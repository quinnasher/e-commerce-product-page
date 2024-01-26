import Header from "./components/Header";
import CartCheckout from "./components/CartCheckout";
import AddToCart from "./components/AddToCart";
import { useState } from "react";
import Product from "./components/Product";

function App() {
  const [cartCount, setCartCount] = useState(5);
  const [discountPrice, setDiscountPrice] = useState(125);
  const [total, setTotal] = useState(discountPrice * cartCount);
  const [initialPrice, setInitialPrice] = useState(250);
  const [discount, setDiscount] = useState(50);

  // Fix the function name here
  function updateCartCount(newCount) {
    setCartCount(newCount);
  }

  function updateInitialPrice(newPrice) {
    setInitialPrice(newPrice);
  }

  function updateDiscountPrice(newDiscountPrice) {
    setDiscount(newDiscountPrice);
  }

  return (
    <div>
      {/*<Header cartCount={cartCount} />*/}
      <div className={"relative"}>{/*<Product />*/}</div>
      <div className={"w-328px md:w-430px mx-auto"}>
        {/*<div className={"absolute top-72px left-0 right-0"}>*/}
        {/*  <CartCheckout*/}
        {/*    cartCount={cartCount}*/}
        {/*    updateCartCount={updateCartCount}*/}
        {/*    price={discountPrice.toFixed(2)}*/}
        {/*    total={total.toFixed(2)}*/}
        {/*  />*/}
        {/*</div>*/}
        <AddToCart
          cartCount={cartCount}
          updateCartCount={updateCartCount}
          discountPrice={discountPrice.toFixed(2)}
          initialPrice={initialPrice.toFixed(2)}
          discount={discount}
          updateDiscountPrice={updateDiscountPrice}
          updateInitialPrice={updateInitialPrice}
          updateDiscount={updateInitialPrice}
        />
      </div>
    </div>
  );
}

export default App;
