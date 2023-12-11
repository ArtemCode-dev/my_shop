import React from 'react'
import s from './style.module.scss'
import Text from '../UI/Text/Text'
import Topbar from '../Topbar/page'
import Navbar from '../Navbar/page'

const Header = () => {
  return (
    <header className={s.header}>
      <Topbar />
      <Navbar />
    </header>
  )
}

export default Header