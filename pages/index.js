import Head from 'next/head'
import Header from './components/Header'
import image from '../assets/firebase-logo.png'
import Link from 'next/link'
// import styles from '../styles/index.css'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>My App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <div className="main">
          <h1 className="title">
            Welcome to my app
          </h1>
          <Header />
          <img src={image} />
        </div>
      </main>
    </div>
  )
}
