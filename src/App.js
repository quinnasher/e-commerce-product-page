import Header from "./components/Header";
import CartCheckout from "./components/CartCheckout";
import AddToCart from "./components/AddToCart";
import { useState } from "react";
import Product from "./components/Product";
import ProductContent from "./components/ProductContent";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [discountPrice, setDiscountPrice] = useState(125);
  const [initialPrice, setInitialPrice] = useState(250);
  const [discountPriceTotal, setDiscountPriceTotal] = useState(
    discountPrice * cartCount,
  );
  const [initialPriceTotal, setInitialPriceTotal] = useState(
    initialPrice * discountPrice,
  );
  const [discount, setDiscount] = useState(50);

  // Fix the function name here
  function updateCartCount(newCount) {
    setCartCount(newCount);
  }

  function updateInitialPrice(newPrice) {
    setInitialPrice(newPrice);
  }

  function updateDiscountPrice(newPrice) {
    setDiscount(newPrice);
  }

  function updateDiscountPriceTotal(newTotal) {
    setDiscountPriceTotal(newTotal);
  }

  function updateInitialPriceTotal(newTotal) {
    setInitialPriceTotal(newTotal);
  }

  return (
    <div className={"mt-4"}>
      <Header
        cartCount={cartCount}
        updateCartCount={updateCartCount}
        total={discountPriceTotal}
        price={discountPrice}
      />
      <div
        className={
          "mt-12 mx-auto md:w-900px flex flex-col max-sm:justify-center md:gap-24 items-center md:flex-row"
        }
      >
        <div className={"mb-4"}>
          <Product />
        </div>
        <div className={"w-328px md:w-430px"}>
          <div className={"mb-6"}>
            <ProductContent />
          </div>

          <AddToCart
            cartCount={cartCount}
            updateCartCount={updateCartCount}
            discountPrice={discountPrice.toFixed(2)}
            initialPrice={initialPrice.toFixed(2)}
            discount={discount}
            updateDiscountPrice={updateDiscountPrice}
            updateInitialPrice={updateInitialPrice}
            updateDiscount={updateInitialPrice}
            updateDiscountPriceTotal={updateDiscountPriceTotal}
            updateInitialPriceTotal={updateInitialPriceTotal}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
