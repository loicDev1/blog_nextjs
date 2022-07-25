import React from 'react'

const Blog = ({ result }) => {
  return (
    <div>
      <h1> {result.title} </h1>
      <p> {result.body} </p>
    </div>
  )
}

export default Blog

export async function getStaticProps(context) {
  const slug = context.params.blog
  const promisse = await fetch('https://jsonplaceholder.typicode.com/posts')
  const result = await promisse.json()
  return {
    props: { result: result[parseInt(slug) - 1] },
  }
}

export async function getStaticPaths() {
  const promisse = await fetch('https://jsonplaceholder.typicode.com/posts')
  const allArticles = await promisse.json()

  const paths = allArticles.map((article) => {
    return { params: { blog: article.id.toString() } }
  })

  return {
    paths,
    fallback: false,
  }
}
