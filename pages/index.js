import React, { useEffect } from 'react'
import HomeScreen from "../src/screens/HomeScreen";
import { Provider, useDispatch } from 'react-redux'
import store from '../src/store/index'
import { APPURL } from '../src/screens/Auth';
//import newsActions from '../src/store/index'
import { useRouter } from 'next/router';
import Footer from '../src/components/Footer';

export default function Home({ data, response2, posts }) {

  const router = useRouter()

  useEffect(() => {
    router.push('/', undefined, { shallow: true })
  }, [])


  return (
    <Provider store={store}>
      <HomeScreen
        data={data}
        data2={response2}
        posts={posts}
      />

      <Footer />
    </Provider>

  )
}

export async function getStaticProps() {

  const response = await fetch(`${APPURL}/slider/`)
  const data = await response.json()

  const dataResponse = await fetch(`${APPURL}/news/`)
  const response2 = await dataResponse.json()

  const postResponse = await fetch(`${APPURL}/posts`)
  const posts = await postResponse.json()

  // dispatch()

  return { props: { data, response2, posts }, revalidate: 3600 };
}

