import React from "react";
// import { Parallax } from "swiper/modules";
// import img from "../../../assets/image/m3.jpg";
import { Parallax } from "react-scroll-parallax";
const ParalaxImage = () => {
  return (
    <div>
      <Parallax speed={5} translate={[-20, 10]}>
        <img
          className="w-full h-[500px]"
          src="https://i.postimg.cc/FKy7CCd4/n3.jpg"
          alt=""
        />
      </Parallax>
    </div>
  );
};

export default ParalaxImage;
