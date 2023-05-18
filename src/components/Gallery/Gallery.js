import React, { useState } from "react";
import "./gallery.scss";
import uuid from "react-uuid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Gallery = ({ photos }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="gallery">
      <div className="bigPhotos-slider">
        <Swiper
          modules={[Navigation, Pagination, Thumbs]}
          slidesPerView={1}
          navigation={true}
          speed={1000}
          loop={false}
          thumbs={{ swiper: thumbsSwiper }}
        >
          {photos?.map((photo) => {
            return (
              <SwiperSlide className="bigPhotos-swiper" key={uuid()}>
                <div className="bigPhoto">
                  <img src={photo?.url} alt="" />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className="smallPhotos-slider">
        <Swiper
          onSwiper={setThumbsSwiper}
          modules={[Navigation, Pagination]}
          slidesPerView={4}
          navigation={true}
          speed={1000}
          loop={false}
        >
          {photos?.map((photo) => {
            return (
              <SwiperSlide className="smallPhotos-swiper" key={uuid()}>
                <div className="smallPhoto">
                  <img src={photo?.url} alt="" />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Gallery;
