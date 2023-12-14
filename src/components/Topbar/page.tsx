'use client'

import React from 'react'
import s from './style.module.scss'
import Container from '../UI/Container/Container'
import Text from '../UI/Text/Text'
import Link from 'next/link'
import Select from '../UI/Select/Select'
import {useState} from 'react'

const Topbar = () => {
  const lang = [
    {id: 1, text: 'RU'},
    {id: 2, text: 'EN'},
  ];
  const [title, setTitle] = useState(lang[0])
  return (
    <div className={s.topbar}>
      <Container>
        <div className={s.topbar__content}>
          <div className={s.topbar__l}><Text size='p4'>Available 24/7 at (405) 555-0128</Text></div>
          <div className={s.topbar__c}>
            <Link href={'/blog'}>Blog</Link>
            <Link href={'/track'}>Track</Link>
            <Link href={'/delivery'}>Delivery</Link>
            <Link href={'/contacts'}>Contacts</Link>
          </div>
          <div className={s.topbar__r}>
            <Select
              onChange={(item) => {
                setTitle(item)
              }}
              title = {title}
              withImg={false}
              list = {lang}
            ></Select>
            <div className={s.topbar__r__autorisation}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M7.00055 1.66634C5.71188 1.66634 4.66721 2.71101 4.66721 3.99967C4.66721 5.28834 5.71188 6.33301 7.00055 6.33301C8.28921 6.33301 9.33388 5.28834 9.33388 3.99967C9.33388 2.71101 8.28921 1.66634 7.00055 1.66634ZM3.33388 3.99967C3.33388 1.97463 4.9755 0.333008 7.00055 0.333008C9.02559 0.333008 10.6672 1.97463 10.6672 3.99967C10.6672 6.02472 9.02559 7.66634 7.00055 7.66634C4.9755 7.66634 3.33388 6.02472 3.33388 3.99967Z" fill="white"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M3.06992 9.66634C2.60771 9.66634 2.24643 9.8914 2.09979 10.2148C1.89681 10.6623 1.71301 11.1951 1.66964 11.7005C1.65025 11.9264 1.74444 12.0928 1.87423 12.1735C2.56033 12.5997 4.15014 13.333 7.00055 13.333C9.85095 13.333 11.4408 12.5997 12.1269 12.1735C12.2567 12.0928 12.3508 11.9264 12.3315 11.7005C12.2881 11.1951 12.1043 10.6623 11.9013 10.2148C11.7547 9.8914 11.3934 9.66634 10.9312 9.66634H3.06992ZM0.885499 9.66404C1.2908 8.77039 2.19582 8.33301 3.06992 8.33301H10.9312C11.8053 8.33301 12.7103 8.77039 13.1156 9.66404C13.3484 10.1773 13.5982 10.8673 13.6599 11.5864C13.7161 12.2413 13.4439 12.9249 12.8304 13.3061C11.9281 13.8666 10.0936 14.6663 7.00055 14.6663C3.90748 14.6663 2.07301 13.8666 1.17066 13.3061C0.557149 12.9249 0.284988 12.2413 0.341191 11.5864C0.40291 10.8673 0.652708 10.1773 0.885499 9.66404Z" fill="white"/>
              </svg>
              <p>Log in / Register</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Topbar