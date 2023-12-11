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
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Topbar