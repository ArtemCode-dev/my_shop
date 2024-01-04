'use client'

import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SampleArrow from './parts/SampleArrow/SampleArrow';
import CustomDots from './parts/CustomDots/CustomDots';
import CustomPaging from './parts/CustomPaging/CustomPaging';

interface ICustomSliderProps {
	children: any,
	onChange?: Function,
	slideShow?: number,
  arrows: boolean,
  dots?: boolean,
  dotsType?: number,
}

const CustomSwiper = ({arrows=true, children, onChange, slideShow = 1, dots=false,dotsType=1,}:ICustomSliderProps) => {
  const [mainSlide, setMainSlide] = useState(1);
  //const context = React.createContext(ContextContainer);
  const settings = {
    className: "center",
    //centerMode: true,
    dots: dots,
    infinite: true,
    appendDots: (dots:any) => (
      <CustomDots dotsType={dotsType} dots={dots} type='slider'/>
    ),
    customPaging: (i:any) => (
      <div><CustomPaging dotsType={dotsType} mainSlide={mainSlide} text={i + 1} /></div>
    ),
    beforeChange: (current:any, next:any) => setMainSlide(next + 1),
    slidesToShow: slideShow,
    speed: 500,
    nextArrow: <SampleArrow type='next' />,
    prevArrow: <SampleArrow type='prev' />,
    swipe: true
  };

  return (
    <Slider {...settings}>
      {children}
    </Slider>
  )
}

export default CustomSwiper