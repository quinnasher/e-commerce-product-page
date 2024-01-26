import shoe from "./images/image-product-1.jpg";
import trash from "./images/icon-delete.svg";
import { useEffect, useState } from "react";

function CartCheckout({ cartCount, updateCartCount, price, total }) {
  // const [price, setPrice] = useState(125);
  // const [total, setTotal] = useState(Number(cartCount) * price);

  // useEffect(() => {
  //   // Recalculate total whenever cartCount or price changes
  //   setTotal(Number(cartCount) * price);
  // }, [cartCount, price]);

  function clearCart() {
    updateCartCount(0);
  }

  function hideCheckout() {}

  return (
    <div className={""}>
      <section
        className={"bg-white rounded-lg w-full h-255px mx-auto shadow-lg"}
      >
        <span
          className={
            "text-veryDarkBlue text-xl ml-4 font-700 capitalize  h-20 flex items-center"
          }
        >
          Cart
        </span>
        <div className={" h-0.5 bg-lightGrayishBlue"}></div>
        {/*empty cart container*/}
        <div
          className={`h-175px flex items-center justify-center ${
            cartCount <= 0 ? "" : "hidden"
          }`}
        >
          <p className={"font-700 tracking-wider text-l opacity-75"}>
            Your cart is empty.
          </p>
        </div>

        {/*  CartCheckout Container*/}
        <div
          className={`${
            cartCount > 0 ? "" : "hidden"
          } flex flex-col gap-7 w-90% mx-auto mt-6`}
        >
          <div className={"flex justify-between items-center"}>
            <div>
              <img className={"w-12 rounded-lg"} src={shoe} alt="" />
            </div>
            <div className={"text-grayishBlue"}>
              <p>Fall Limited Edition Sneakers</p>
              <p className={"tracking-wider"}>
                ${price} x {cartCount}{" "}
                <span className={"font-700 text-black"}>${total}</span>
              </p>
            </div>
            <button onClick={clearCart}>
              <img src={trash} alt="" />
            </button>
          </div>
          {/*  Checkout button*/}
          <button className={"lg-btn mx-auto"}>Checkout</button>
        </div>
      </section>
    </div>
  );
}

export default CartCheckout;
