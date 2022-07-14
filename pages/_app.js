import "../styles/globals.css";
import Header from "../components/Header";
import Image from "next/image";
import imgsrc from "../utils/imgsrc";

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
