import Head from 'next/head'
import Header from './components/Header'

export default function Todo() {
  return (
    <div className="container">
      <Head>
        <title>My todos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <div className="main">
          <h1 className="title">
            stuff we gotta finish
          </h1>
          <Header />
        </div>
      </main>
    </div>
  )
}
