import Head from 'next/head'
import Link from 'next/link';
import MyLayout from '../components/MyLayout';


function Profile() {
    return (<>
        <Head>
            <title>Project Nighthawk</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
        </Head>
        <MyLayout>
            <div className="col-6 rounded-lg bg-light mx-auto shadow-lg m-5 p-3">
                <p>User's Name</p>
                <p>Email Address</p>
                <p>Phone Number</p>
                <p>Shipping Address</p>
            </div>
        </MyLayout>
    </>)
}

export default Profile