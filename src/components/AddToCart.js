import add from "./images/icon-plus.svg";
import minus from "./images/icon-minus.svg";
import cart from "./images/icon-cart.svg";
import { useEffect, useState } from "react";

function AddToCart({
  cartCount,
  discountPrice,
  initialPrice,
  discount,
  updateCartCount,
  updateInitialPriceTotal,
  updateDiscountPriceTotal,
}) {
  const [count, setCount] = useState(1);
  const [localPrice, setLocalPrice] = useState(initialPrice);
  const [localDiscountPrice, setLocalDiscountPrice] = useState(discountPrice);
  const [localTotal, setLocalTotal] = useState(initialPrice * count);
  const [localDiscountTotal, setLocalDiscountTotal] = useState(
    localDiscountPrice * count,
  );
  function decrease() {
    if (count === 1) {
      setCount(1);
    } else setCount(count - 1);
    // console.log(count);
  }

  function increase() {
    if (count < 20) {
      // console.log(count);
      setCount(count + 1);
    }
  }

  function addToCart() {
    // a temp for count
    let newCount = cartCount + count;

    updateCartCount(newCount);
    updateInitialPriceTotal(initialPrice * newCount);
    updateDiscountPriceTotal(discountPrice * newCount);

    // set local count to default
  }

  useEffect(() => {
    setLocalTotal(count * localPrice);
  }, [count, localPrice]);

  useEffect(() => {
    setLocalDiscountTotal(count * localDiscountPrice);
  }, [count, localDiscountPrice]);
  //
  console.log("The Discount total is: " + localDiscountTotal);
  return (
    <div>
      <section className={""}>
        <div
          className={
            "flex md:inline-block justify-between items-center w-full tracking-wide mb-6"
          }
        >
          <div
            className={
              "flex gap-10  md:gap-8 tracking-widest md:tracking-normal "
            }
          >
            <span className={"font-700  text-2xl"}>
              ${localDiscountTotal.toFixed(2)}
            </span>
            <span
              className={
                "bg-paleOrange py-0.5 px-2 rounded-lg text-orange font-700"
              }
            >
              {discount}%
            </span>
          </div>
          <span className={"text-grayishBlue font-700 line-through md:text-sm"}>
            ${localTotal.toFixed(2)}
          </span>
        </div>

        <div className="flex  gap-4 flex-col md:flex-row">
          <div
            className={
              "bg-lightGrayishBlue flex flex-grow justify-between items-center  px-4 h-12 rounded-2xl"
            }
          >
            <button onClick={decrease}>
              <img src={minus} alt="" />
            </button>

            <span className={"font-700 "}>{count}</span>

            <button onClick={increase}>
              <img src={add} alt="" />
            </button>
          </div>
          <button
            onClick={addToCart}
            className={"lg-btn flex flex-grow-0 gap-4 md:w-260px "}
          >
            <img className={""} src={cart} alt="" />
            <span>Add to cart</span>
          </button>
        </div>
      </section>
    </div>
  );
}
export default AddToCart;
