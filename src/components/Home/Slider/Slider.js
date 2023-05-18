import React from "react";
import "./slider.scss";
import SliderImage from "../../../images/image-slider.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const Slider = () => {
  return (
    <div className="slider">
      <Swiper
        className="swiper"
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        navigation={false}
        speed={2000}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide className="swiper-slider">
          <div className="swiper-info">
            <h1 className="swiper-title">
              Buy & Sell <br /> What's Now & Next
            </h1>
            <p className="swiper-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis
              malesuada et leo faucibus
            </p>
          </div>
          <div className="swiper-image">
            <img src={SliderImage} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slider">
          <div className="swiper-info">
            <h1 className="swiper-title">
              Buy & Sell <br /> What's Now & Next
            </h1>
            <p className="swiper-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis
              malesuada et leo faucibus
            </p>
          </div>
          <div className="swiper-image">
            <img src={SliderImage} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slider">
          <div className="swiper-info">
            <h1 className="swiper-title">
              Buy & Sell <br /> What's Now & Next
            </h1>
            <p className="swiper-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis
              malesuada et leo faucibus
            </p>
          </div>
          <div className="swiper-image">
            <img src={SliderImage} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
