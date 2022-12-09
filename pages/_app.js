import { Provider } from 'react-redux'
import '../styles/globals.css'
import store from '../src/store/index'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Router from "next/router";
import Spinner from '../src/components/Spinner'


function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true)

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const start = () => {
      console.log("start");
      setLoading(true);
    };
    const end = () => {
      console.log("findished");
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, [])



  const router = useRouter()

  return <Provider store={store}>
    {loading ? (
      // <h1>Loading...</h1>
      <Spinner />
    ) : (
      <Component {...pageProps} />
    )}


  </Provider>
}

export default MyApp
