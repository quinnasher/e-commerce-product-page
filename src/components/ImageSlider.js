import { useState } from "react";
import nextIcon from "./images/icon-next.svg";
import previousIcon from "./images/icon-previous.svg";

function ImageSlider({ imageUrl, thumbnailUrl }) {
  const [imageIndex, setImageIndex] = useState(0);

  function showNextImage() {
    setImageIndex((index) => {
      if (index === imageUrl.length - 1) return 0;
      return index + 1;
    });
  }
  function showPreviousImage() {
    setImageIndex((index) => {
      if (index === 0) return imageUrl.length - 1;
      return index - 1;
    });
  }

  return (
    <div className={"w-full h-full relative overflow-hidden"}>
      <div
        style={{ transform: `translateX(${-100 * imageIndex}%)` }}
        className={"w-full h-full flex transition duration-200 md:rounded-xl"}
      >
        {imageUrl.map((url) => (
          <img
            // className={`transform translate[${-100 * imageIndex}%]`}
            className={`w-full h-300px block flex-shrink-0 flex-grow-0 md:rounded-2xl`}
            src={url}
            key={url}
            alt=""
          />
        ))}
      </div>
      <div
        className={
          "md:hidden w-80 mx-auto flex justify-between items-center absolute left-0 right-0 top-0 bottom-0 my-auto"
        }
      >
        <button
          onClick={showPreviousImage}
          className={"image-slider-btn md:hidden"}
        >
          <img src={previousIcon} alt="" />
        </button>

        <button
          onClick={showNextImage}
          className={"image-slider-btn md:hidden"}
        >
          <img src={nextIcon} alt="" />
        </button>
      </div>
      <div>
        <div className={"hidden md:flex md:gap-4 md:mt-4"}>
          {thumbnailUrl.map((url, index) => (
            <button
              className={"w-full"}
              key={index}
              onClick={() => setImageIndex(index)}
            >
              {
                <img
                  key={url}
                  className={"w-full object-contain rounded-xl block"}
                  src={url}
                  alt=""
                />
              }
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
