import add from "./images/icon-plus.svg";
import minus from "./images/icon-minus.svg";
import cart from "./images/icon-cart.svg";

function AddToCart({
  cartCount,
  discountPrice,
  initialPrice,
  discount,
  updateCartCount,
  updateDiscountPrice,
  updateInitialPrice,
  updateDiscount,
}) {
  return (
    <div>
      <section className={"bg-paleOrange"}>
        <div
          className={
            "flex md:inline-block justify-between items-center w-full tracking-wide mb-6"
          }
        >
          <div className={"flex gap-12 tracking-wider "}>
            <span className={"font-700  text-2xl"}>${discountPrice}</span>
            <span
              className={
                "bg-paleOrange py-0.5 px-2 rounded-lg text-orange font-700"
              }
            >
              {discount}%
            </span>
          </div>
          <span className={"text-grayishBlue font-700 line-through"}>
            ${initialPrice}
          </span>
        </div>

        <div className="flex  gap-4 flex-col md:flex-row">
          <div
            style={{ alignItems: "center" }}
            className={
              "bg-lightGrayishBlue flex flex-grow justify-between item-center  px-4 h-12 rounded-2xl" +
              ""
            }
          >
            <button>
              <img src={minus} alt="" />
            </button>

            <span className={"font-700 "}>5</span>

            <button>
              <img src={add} alt="" />
            </button>
          </div>
          <button className={"lg-btn flex flex-grow-0 gap-4 md:w-260px "}>
            <img className={""} src={cart} alt="" />
            <span>Add to cart</span>
          </button>
        </div>
      </section>
    </div>
  );
}
export default AddToCart;
