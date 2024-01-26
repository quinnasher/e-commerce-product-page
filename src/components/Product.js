import product1 from "./images/image-product-1.jpg";
import product2 from "./images/image-product-2.jpg";
import product3 from "./images/image-product-3.jpg";
import product4 from "./images/image-product-4.jpg";
import thumbnail1 from "./images/image-product-1-thumbnail.jpg";
import thumbnail2 from "./images/image-product-2-thumbnail.jpg";
import thumbnail3 from "./images/image-product-3-thumbnail.jpg";
import thumbnail4 from "./images/image-product-4-thumbnail.jpg";
import ImageSlider from "./ImageSlider";

const productImages = [product1, product2, product3, product4];
const productThumbnails = [thumbnail1, thumbnail2, thumbnail3, thumbnail4];

function Product() {
  return (
    <div className={"w-375px h-300px md:h-full  mx-auto md:rounded-xl"}>
      <ImageSlider imageUrl={productImages} thumbnailUrl={productThumbnails} />
    </div>
  );
}

export default Product;
