import Head from 'next/head'
import MyLayout from '../components/MyLayout';

function About() {
    return (<>
        <Head>
            <title>Project Nighthawk</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
        </Head>
        <MyLayout>
            <div>
                <p>What We Do</p>
            </div>
        </MyLayout>
    </>)
}

export default About
