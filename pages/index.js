import React, { useEffect } from 'react'
import HomeScreen from "../src/screens/HomeScreen";
import { Provider, useDispatch } from 'react-redux'
import store from '../src/store/index'
import { APPURL } from '../src/screens/Auth';
//import newsActions from '../src/store/index'
import { useRouter } from 'next/router';
import Footer from '../src/components/Footer';

export default function Home({ data, response2 }) {

  const router = useRouter()

  useEffect(() => {
    router.push('/', undefined, { shallow: true })
  }, [])


  return (
    <Provider store={store}>
      <HomeScreen
        data={data}
        data2={response2} />

      <Footer />
    </Provider>

  )
}

export async function getStaticProps() {

  const response = await fetch(`${APPURL}/slider/`)
  const dataResponse = await fetch(`${APPURL}/news/`)
  const response2 = await dataResponse.json()
  // dispatch()
  const data = await response.json()
  return { props: { data, response2 }, revalidate: 3600 };
}



// Home.getInitialProps = async()=> {

//   const response = await fetch(`${APPURL}/slider/`)
//   const dataResponse = await fetch(`${APPURL}/news/`)
//   const response2 = await dataResponse.json()
//   // dispatch()
//   const data = await response.json()
//   return { props: { data, response2 }, };
// }
