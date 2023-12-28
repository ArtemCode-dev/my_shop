'use client'

import React from 'react'
import CustomSwiper from '../../CustomSwiper/CustomSwiper'
import s from './style.module.scss'
import Text from '../../UI/Text/Text'
import Container from '../../UI/Container/Container'
import Button from '../../UI/Button/Button'

const testData = [
  {img: '/images/png/swagger/test-img.png'},
  {img: '/images/png/swagger/test-img.png'},
  {img: '/images/png/swagger/test-img.png'},
]

const Swiper = () => {
  return (
    <div className={s.swiper}>
      <CustomSwiper dots arrows>
        {testData.map((item) => (
          <div className={s.slide}>
            <img src={item.img} alt="img" />
            <Container>
              <div className={s.slide__content}>
                
                <Text size='h1'>Menswear 2020</Text>
                <Text size='p2'>New collection</Text>
                <div>
                  <Button type='dark' onClick={() => console.log('1')}>Shop sale</Button>
                  <Button type='origin' onClick={() => console.log('1')}>Shop the menswear</Button>
                </div>
              </div>
            </Container>
          </div>
        ))}
      </CustomSwiper>
    </div>
  )
}

export default Swiper