import React, {useState} from 'react'
import style from '../../styles/personal.module.css'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'

const Index = ({ allUsers }) => {
  const [component, setComponent] = useState('')

  const loader = () => {
    setComponent(<div className={style.chargement}> </div>)
  }

  return (
    <div className={style.center}>
        { component }
      <h1>La liste des utilisateurs</h1>
      {allUsers.map((user, index) => {
        return (
          <div className={styles.card} key={index}>
            <div> {user.name} </div>
            <div>
              <Link href={`liste/${user.id}`}>
                <a style={{ color: 'green' }} onClick={loader}> contacter </a>
              </Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Index

export async function getStaticProps() {
  const promisse = await fetch('https://jsonplaceholder.typicode.com/users')
  const allUsers = await promisse.json()
  return {
    props: { allUsers },
  }
}
