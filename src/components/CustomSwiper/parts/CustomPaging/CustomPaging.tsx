'use client'

import React from 'react';
import s from './style.module.scss'
import Container from '@/src/components/UI/Container/Container';

interface ICustomDotsProps {
	text: string,
  dotsType: number,
  mainSlide: number,
}

const CustomPaging = ({mainSlide, dotsType, text}:ICustomDotsProps) => {
  switch (dotsType) {
    case 1 :
      return (
        <div className={text == `${mainSlide}` ? s.active : s.paging }>
          {'0' + text}
        </div>
      )
  }
}

export default CustomPaging