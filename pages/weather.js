import Head from 'next/head'
import Header from './components/Header'
import { connect } from 'react-redux'
import {setInfo } from '../redux/actions/main'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>My Weather Report</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <div className="main">
          <h1 className="title">
            weather today
          </h1>
          <Header />
        </div>
      </main>
    </div>
  )
}

// const mapStateToProps = state => ({
//   userInfo: state
// })

// const mapDispatchToProps = {
//   setInfo: setInfo
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Weather)