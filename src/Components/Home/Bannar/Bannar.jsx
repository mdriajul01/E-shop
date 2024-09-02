import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// Import images
import bannar1 from "../../../assets/image/b1.jpg";
import bannar2 from "../../../assets/image/m3.jpg";
import bannar3 from "../../../assets/image/n3.jpg";
import bannar4 from "../../../assets/image/n2.jpg";

// Import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

// Import Framer Motion
import { motion } from "framer-motion";

const Bannar = () => {
  return (
    <section className="mt-20 lg:mt-28">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-3xl overflow-hidden"
      >
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1.7} 
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
            loop:true,
          }}
          
          loop={true}
          pagination={{ clickable: true, autoplay:true }}
          modules={[EffectCoverflow, Pagination]}
          className="p-3"
        >
          <SwiperSlide>
            <img
              className="h-[550px] w-full object-cover rounded-3xl"
              src={bannar4}
              alt="Banner 4"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-[550px] w-full object-cover rounded-3xl"
              src={bannar3}
              alt="Banner 3"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-[550px] w-full object-cover rounded-3xl"
              src={bannar2}
              alt="Banner 2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-[550px] w-full object-cover rounded-3xl"
              src={bannar1}
              alt="Banner 1"
            />
          </SwiperSlide>
        </Swiper>
      </motion.div>
    </section>
  );
};

export default Bannar;
