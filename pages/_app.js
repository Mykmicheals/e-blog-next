import { Provider } from 'react-redux'
import '../styles/globals.css'
import store from '../src/store/index'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Router from "next/router";
import Spinner from '../src/components/Spinner'


function MyApp({ Component, pageProps }) {


  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   Router.events.on("routeChangeStart", () => setLoading(true));
  //   Router.events.on("routeChangeComplete", () => setLoading(false));
  //   Router.events.on("routeChangeError", () => setLoading(false));
  //   return () => {
  //     Router.events.off("routeChangeStart", () => setLoading(true));
  //     Router.events.off("routeChangeComplete", () => setLoading(false));
  //     Router.events.off("routeChangeError", () => setLoading(false));
  //   };
  // }, [Router.events])



  return <Provider store={store}>
    {/* {loading ? (
      // <Spinner />
    <p>loafing</p>
    ) : ( */}
    <Component {...pageProps} />
    {/* )} */}


  </Provider>
}

export default MyApp
