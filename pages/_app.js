import '../styles/globals.css';
import Head from 'next/head';
import 'typeface-open-sans';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>R.J. Goetz / Web Developer</title>
        <link rel="icon" href="/gtz-logo.png" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
