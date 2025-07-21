import Head from 'next/head';
import '../app/globals.css';

function App({Component,pageProps}) {
  return (
    <>
    <Head>
    <title>Build-A-PC</title>
    </Head>
    <Component {...pageProps} />
    </>
  );
}
export default App;