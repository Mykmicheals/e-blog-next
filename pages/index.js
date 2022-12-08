import React, { useEffect } from 'react'
import HomeScreen from "../src/screens/HomeScreen";
import { Provider, useDispatch } from 'react-redux'
import store from '../src/store/index'
import { APPURL } from '../src/screens/Auth';
//import newsActions from '../src/store/index'

export default function Home({ data, response2 }) {
  //  const dispatch = useDispatch()

  // const updateData = () => {
  //   dispatch(newsActions.storeNews(data))
  // }

  // useEffect(() => {
  //   updateData()
  // })

  return (
    <Provider store={store}>
      <HomeScreen
        data={data}
        data2={response2} />

    </Provider>

  )
}

export async function getServerSideProps() {
  const response = await fetch(`${APPURL}/slider/`)
  const dataResponse = await fetch(`${APPURL}/news/`)
  const response2 = await dataResponse.json()
  // dispatch()
  const data = await response.json()
  return { props: { data, response2 }, };
}