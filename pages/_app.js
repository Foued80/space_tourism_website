import "../styles/globals.css";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  imgsrc();
  return (
    <>
      <div className="container">
        <Header />
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
