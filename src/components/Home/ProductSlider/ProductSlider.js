import React from "react";
import "./productSlider.scss";
import uuid from "react-uuid";
import Product from "../../Product/Product";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const CategorySlider = ({ products, heading }) => {
  return (
    <div className="products-slider">
      <div className="slider-info">
        <div className="heading">{heading}</div>
        <div className="showAll">{"Hamısına bax >"}</div>
      </div>
      <div className="slider-box">
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          navigation={false}
          speed={1000}
          loop={false}
          breakpoints={{
            // when window width is >= 576px
            576: {
              slidesPerView: 4,
            },
          }}
        >
          {products.map((product) => {
            return (
              <SwiperSlide className="product-swiper" key={uuid()}>
                <Product product={product} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default CategorySlider;
