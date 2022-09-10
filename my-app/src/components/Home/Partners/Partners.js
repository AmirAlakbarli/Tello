import React from "react";
import "./partners.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import partner1 from "../../../images/partner 1.svg";
import partner2 from "../../../images/partner 2.svg";
import partner3 from "../../../images/partner 3.svg";
import partner4 from "../../../images/partner 4.svg";
import partner5 from "../../../images/partner 5.svg";
import partner6 from "../../../images/partner 6.svg";

const Partners = () => {
  return (
    <div className="partners">
      <div className="partners-slider">
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={2}
          navigation={false}
          pagination={{ clickable: true }}
          speed={1000}
          loop={false}
          breakpoints={{
            // when window width is >= 576px
            576: {
              slidesPerView: 4,
            },
          }}
        >
          <SwiperSlide className="partner-swiper">
            <div className="partner">
              <img src={partner1} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="partner-swiper">
            <div className="partner">
              <img src={partner2} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="partner-swiper">
            <div className="partner"></div>
            <img src={partner3} alt="" />
          </SwiperSlide>
          <SwiperSlide className="partner-swiper">
            <div className="partner"></div>
            <img src={partner4} alt="" />
          </SwiperSlide>
          <SwiperSlide className="partner-swiper">
            <div className="partner"></div>
            <img src={partner5} alt="" />
          </SwiperSlide>
          <SwiperSlide className="partner-swiper">
            <div className="partner"></div>
            <img src={partner6} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Partners;
