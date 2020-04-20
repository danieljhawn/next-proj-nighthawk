import Head from 'next/head'
import MyLayout from '../components/MyLayout'
import GoogleMap from '../components/GoogleMap'
import AllCards from '../components/AllCards'

const Home = () => (
  <>
    <Head>
      <title>Project Nighthawk</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="../public/index.css" />
    </Head>
    <MyLayout>
      <AllCards />
      <GoogleMap />
    </MyLayout>
  </>
)

export default Home
