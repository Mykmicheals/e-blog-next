import Link from "next/link";
import HomeScreen from "../src/screens/HomeScreen";
// import Header from "../src/components/Header";
import { Provider, useDispatch } from 'react-redux'
import store from '../src/store/index'

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { APPURL } from '../src/screens/Auth';


export default function Home({data,response2}) {
  // const dispatch = useDispatch()
  return (
    <Provider store={store}>
      {/* {console.log(response2)} */}
      {/* <Header /> */}
    <HomeScreen
     data={data}
    data2 = {response2}/>
  
    </Provider>
 

  )
}


export async function getServerSideProps() {
  const response = await fetch(`${APPURL}/slider/`)
  const dataResponse = await fetch(`${APPURL}/news/`)
  const response2 = await dataResponse.json()
  // dispatch()
  const data = await response.json()
    return { props: {data, response2}, };
}