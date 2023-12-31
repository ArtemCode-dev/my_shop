'use client'

import React from 'react';
import s from './style.module.scss'
import Container from '@/src/components/UI/Container/Container';

interface ICustomDotsProps {
	type: string,
	onClick?: () => void,
  dots: any,
  dotsType: number,
}

const CustomDots = ({dotsType, type='slider', onClick, dots}:ICustomDotsProps) => {

  switch (type) {
    case 'slider' :
      return (
          <div onClick={onClick} className={s.dots__slider}>
            <Container>
            <ul style={{ margin: "0px" }}> {dots} </ul>
            </Container>
          </div>
      )
    case 'origin' :
      return (
        <div onClick={onClick} className={s.arrow + ' ' + s.prev}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.20711 17.2071C8.81658 17.5976 8.18342 17.5976 7.79289 17.2071L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929L7.79289 6.79289C8.18342 6.40237 8.81658 6.40237 9.20711 6.79289C9.59763 7.18342 9.59763 7.81658 9.20711 8.20711L6.41421 11L20 11C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13L6.41421 13L9.20711 15.7929C9.59763 16.1834 9.59763 16.8166 9.20711 17.2071Z" fill="#424551"/>
          </svg>
        </div>
      )
  }
}

export default CustomDots