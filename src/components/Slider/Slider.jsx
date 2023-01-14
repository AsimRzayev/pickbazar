
import React from 'react'
import { Swiper } from "swiper/react";

import { FreeMode,Navigation } from "swiper";


// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

import "./Slider.css";


const Slider = ({slidesPerView,spaceBetween,children}) => {
  return (
    <Swiper
    slidesPerView={slidesPerView}
    spaceBetween={spaceBetween}
    freeMode={true}
    modules={[FreeMode,Navigation]}
    className="mySwiper"
   
  >
    {children}
  </Swiper>
  )
}

export default Slider