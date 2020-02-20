import '../App.css'
import { Container } from 'next/app';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
    return (
        <Container>
            <Head>
                <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet"/>
            </Head>
            <Component {...pageProps} />
        </Container>
    ) 
  }