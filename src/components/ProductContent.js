function ProductContent() {
  return (
    <div>
      <h1
        className={
          "text-orange opacity-75 uppercase tracking-wide font-700 mb-4"
        }
      >
        Sneaker Company
      </h1>
      <h2
        className={
          "text-veryDarkBlue text-2xl tracking-wide capitalize font-700 mb-5"
        }
      >
        Fall limited edition sneakers
      </h2>
      <p className={"text-grayishBlue text-sm leading-relaxed"}>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
    </div>
  );
}

export default ProductContent;
