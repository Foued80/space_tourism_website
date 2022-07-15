import "../styles/globals.css";
import Header from "../components/Header";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>space tourism website</title>
        <meta name="description" content="spacex space tourism agency" />
      </Head>
      <div className="container">
        <Header />
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
