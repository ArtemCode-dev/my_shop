'use client'

import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SampleArrow from './parts/SampleArrow/SampleArrow';
import CustomDots from './parts/CustomDots/CustomDots';

interface ICustomSliderProps {
	children: any,
	onChange?: Function,
	slideShow?: number,
  arrows: boolean,
  dots?: boolean,
}

const CustomSwiper = ({arrows=true, children, onChange, slideShow = 1, dots=false}:ICustomSliderProps) => {
  const settings = {
    className: "center",
    //centerMode: true,
    dots: dots,
    infinite: true,
    appendDots: (dots:any) => (
      <CustomDots dots={dots} type='slider'/>
    ),
    customPaging: (i:any) => (
      <div
        style={{
          width: "30px",
          color: "blue",
          border: "1px blue solid"
        }}
      >
        {i + 1}
      </div>
    ),
    slidesToShow: slideShow,
    speed: 500,
    nextArrow: <SampleArrow type='next' />,
    prevArrow: <SampleArrow type='prev' />,
    // afterChange: (index) => {
    //   if (onChange) {
    //     onChange(index);
    //   }
    // },
    swipe: true
  };

  return (
    <Slider {...settings}>
      {children}
    </Slider>
  )
}

export default CustomSwiper