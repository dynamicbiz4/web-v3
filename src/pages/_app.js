import "../styles/globals.scss";
import "../styles/reset.scss";
import { ThemeProvider } from "next-themes";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import LoadingScreen from "../components/LoadingScreen";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Head>
        <title>Dynamic Biz | Innovate • Connect • Inspire • Invests</title>
      </Head>

      {isReady ? (
        <>
          <header>
            <Navbar />
          </header>

          <Component {...pageProps} />

          <footer>
            <Footer />
          </footer>
        </>
      ) : (
        <LoadingScreen />
      )}
    </ThemeProvider>
  );
}

export default MyApp;
