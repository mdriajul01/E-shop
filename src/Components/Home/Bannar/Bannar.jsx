import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import bannar1 from "../../../assets/image/b1.jpg";
import bannar2 from "../../../assets/image/m3.jpg";
import bannar3 from "../../../assets/image/n3.jpg";
import bannar4 from "../../../assets/image/n2.jpg";
// import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

const Bannar = () => {
  return (
    <section className="mt-5 ">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"1.7"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true}
        pagination={true }
        modules={[EffectCoverflow, Pagination]}
        className="rounded-3xl p-3"
      >
        <SwiperSlide>
          <img
            className="h-[550px] w-fit  rounded-3xl"
            src={bannar4}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-[550px] w-fit rounded-3xl"
            src={bannar3}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-[550px] w-fit rounded-3xl"
            src={bannar2}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-[550px] w-fit rounded-3xl"
            src={bannar1}
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Bannar;
