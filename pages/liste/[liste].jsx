import React from 'react'
import style from '../../styles/Home.module.css'

const Liste = ({ user }) => {
  return (
    <div className={style.card}>
      <h1> Profil user : </h1>
      <div> {user.name} </div>
      <div> {user.phone} </div>
      <div> {user.website} </div>
      <div> {user.company.name} </div>
    </div>
  )
}

export default Liste

export async function getStaticProps(context) {
  const slug = context.params.liste
  const promisse = await fetch('https://jsonplaceholder.typicode.com/users')
  const result = await promisse.json()
  return {
    props: { user: result[parseInt(slug) - 1] },
  }
}

export async function getStaticPaths() {
  const promisse = await fetch('https://jsonplaceholder.typicode.com/users')
  const allUsers = await promisse.json()
  const paths = allUsers.map((user) => {
    return { params: { liste: user.id.toString() } }
  })

  return {
    paths,
    fallback: false,
  }
}
