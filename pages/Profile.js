import Head from 'next/head'
import Link from 'next/link';
import MyLayout from '../components/MyLayout';
import Profile from '../components/Profile';



function ProfilePage() {
    return (<>
        <Head>
            <title>Project Nighthawk</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
        </Head>
        <MyLayout>
            <div className="col-6 rounded-lg bg-light mx-auto shadow-lg p-5">
                <Profile />
            </div>
        </MyLayout>
    </>)
}

export default ProfilePage