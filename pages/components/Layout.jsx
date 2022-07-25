import React from 'react'
import Navbar from './Navbar'
import style from '../../styles/personal.module.css'

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className={style.container}>{children}</div>
    </div>
  )
}

export default Layout
