import Head from 'next/head'
import Link from 'next/link';
import Login from '../components/Login';
import MyLayout from '../components/MyLayout';
import GoogleMap from '../components/GoogleMap'

// import {LoadDB} from "../firebase/firedatabase.js;
// import { loadFirebase } from '../firebase/firedatabase.js';

// export default class Index extends React.Component{
//   static async getInitialProps() {
//     let firebase = await loadFirebase()
//     let db = firebase.firestore() 
//     db.

//     return{}
//   }

const Home = () => (
  <>
    <Head>
      <title>Project Nighthawk</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
    </Head>
    <MyLayout>
      <GoogleMap />
    </MyLayout>
  </>
)

export default Home
