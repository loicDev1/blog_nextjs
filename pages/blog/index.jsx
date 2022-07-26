import React, {useState}  from 'react'
import style from '../../styles/personal.module.css'
import styles from '../../styles/Home.module.css'
import Head from 'next/head'
import Link from 'next/link'

const Index = ({ allArticles }) => {
  
  const [component, setComponent] = useState('')

  const loader = () => {
    setComponent(<div className={style.chargement}>  </div>)
  }

  const reduceTextLength = (text) => {
    const tab = []
    const textz = text.split('')
    for (let i = 0; i < text.length; i++) {
      if (i >= 20) {
        break
      } else {
        tab.push(text[i])
      }
    }
    return tab.join('') + '...'
  }
  return (
    <>
      {
        component
      }
      <div className={style.center}>
        <h1>Bienvenue sur le blog</h1>
        <p> voici les article </p>
      </div>
      <div>
        {allArticles.map((article, index) => {
          return (
            <div className={styles.card} key={index}>
              <div>
                {' '}
                <b>Titre :</b> {article.title}{' '}
              </div>
              <div style={{ margin: '10px 0px' }}>
                {' '}
                {reduceTextLength(article.body)}{' '}
              </div>
              <div>
                <Link href={`blog/${article.id}`}>
                  <a style={{ color: 'blue' }} onClick={loader} > lire larticle </a>
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Index

export async function getStaticProps() {
  const promisse = await fetch('https://jsonplaceholder.typicode.com/posts')
  const allArticles = await promisse.json()
  return {
    props: { allArticles },
  }
}
