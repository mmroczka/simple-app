import Head from 'next/head'
import Header from './components/Header'
import { connect } from 'react-redux'
import {setInfo } from '../redux/actions/main'

function Weather() {
  return (
    <div className="container">
      <Head>
        <title>My Weather Report</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="main">
          <h1 className="title">
            Weather report today is good!
          </h1>
          <Header />
        </div>
      </main>
    </div>
  )
}

const mapStateToProps = state => ({
  userInfo: state
})

const mapDispatchToProps = {
  setInfo: setInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather)