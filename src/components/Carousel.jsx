import { useEffect } from "react";
import { initFlowbite } from "flowbite";

const images = [
  { src: "/images/carousel1.JPG", position: "object-[20%_52%]" },
  { src: "/images/carousel2.JPG", position: "object-[30%_93%]" },
  { src: "/images/carousel3.JPG", position: "object-[50%_64%]" },
  { src: "/images/carousel4.JPG", position: "object-[10%_50%]" },
  { src: "/images/carousel5.JPG", position: "object-[20%_40%]" },
];

function Carousel() {
  useEffect(() => {
    // Preload all images
    images.forEach(({ src }) => {
      const img = new Image();
      img.src = src;
    });

    // Init Flowbite
    initFlowbite();
  }, []);

  return (
    <div
      id="default-carousel"
      className="relative"
      data-carousel="slide"
      data-carousel-interval="3000"
    >
      {/* Carousel wrapper */}
      <div className="relative h-[680px] w-[1450px] overflow-hidden ">
        {images.map((image, i) => (
          <div
            key={i}
            className="hidden duration-800 ease-in-out"
            data-carousel-item={i === 0 ? "active" : ""}
          >
            <img
              src={image.src}
              className={`block h-full w-full object-cover ${image.position}`}
              alt={`Slide ${i + 1}`}
              loading="eager" // ensures fast loading
            />
          </div>
        ))}
      </div>

      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-2 left-1/2 px-[2px]">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            className=" carousel-btns flex"
            aria-label={`Slide ${i + 1}`}
            data-carousel-slide-to={i}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
