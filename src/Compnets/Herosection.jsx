import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import image1 from "../assets/images/herot7.webp";
import image2 from "../assets/images/herot2.jpg";
import image4 from "../assets/images/herot4.jpeg";

function Herosection() {
  return (
    <div className="w-full mt-[100px]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {[image1, image2, image4].map((img, i) => (
          <SwiperSlide key={i}>
            <div className="w-full h-[250px] sm:h-[400px] md:h-[550px] lg:h-[600px]">
              <img
                src={img}
                alt={`slide-${i}`}
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Herosection;
