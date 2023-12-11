import React from 'react'
import s from './style.module.scss'
import Text from '../UI/Text/Text'

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.topbar}>
        <Text size='p2'>topbar</Text>
      </div>
      <div className={s.navbar}>
        navbar
      </div>
    </header>
  )
}

export default Header