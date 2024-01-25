import shoe from "./images/image-product-1.jpg";
import trash from "./images/icon-delete.svg";
import { useEffect, useState } from "react";

function Cart({ cartCount, setCartCount }) {
  // setCartCount(3);
  cartCount = 4;
  const [price, setPrice] = useState(125);
  const [total, setTotal] = useState(cartCount * price);

  return (
    <div>
      <section className={"w-360px h-255px mx-auto shadow-lg"}>
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

        {/*  Cart Container*/}
        <div className={"flex flex-col gap-7 w-328px mx-auto mt-6"}>
          <div className={"flex justify-between items-center"}>
            <div>
              <img className={"w-12 rounded-lg"} src={shoe} alt="" />
            </div>
            <div className={"text-grayishBlue"}>
              <p>Fall Limited Edition Sneakers</p>
              <p className={"tracking-wider"}>
                ${price.toFixed(2)} x {cartCount}{" "}
                <span className={"font-700 text-black"}>
                  ${total.toFixed(2)}
                </span>
              </p>
            </div>
            <button>
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

export default Cart;
