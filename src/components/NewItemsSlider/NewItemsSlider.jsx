import React from "react";

// import Swiper Component
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import data
import { newInStore } from "../../utils/data";

export default function NewItemsSlider() {
  return (
    <Swiper
      grabCursor={true}
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 18,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
      className="mySwiper"
    >
      {newInStore.products.map((product, index) => {
        return (
          <SwiperSlide className="max-w-[265px]" key={index}>
            <div className="relative">
              <img src={product.image.type} alt="image products" />;
              <div className="absolute bottom-[20px] w-full text-center text-[18px] font-medium capitalize text-white lg:text-2xl">
                {product.name}
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
