import React from 'react'
import Link from 'next/link'
import style from '../../styles/personal.module.css'

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <Link href="/">
        <a className={style.link} > Accueil </a>
      </Link>
      <Link href="/blog">
        <a className={style.link}> Blog </a>
      </Link>
      <Link href="/liste">
        <a className={style.link}> Liste </a>
      </Link>
    </div>
  )
}

export default Navbar
