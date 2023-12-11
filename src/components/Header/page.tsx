import React from 'react'
import s from './style.module.scss'
import Text from '../UI/Text/Text'
import Topbar from '../Topbar/page'

const Header = () => {
  return (
    <header className={s.header}>
      <Topbar />
      <div className={s.navbar}>
        navbar
      </div>
    </header>
  )
}

export default Header