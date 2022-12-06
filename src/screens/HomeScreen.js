import React from 'react'
import Header from '../components/Header'
import MainLeft from '../components/MainLeft';
import MainRight from '../components/MainRight';
import NewsSection from '../components/NewsSection';
import { useDispatch } from 'react-redux';
// import newsActions from '../store/index'
import newsActions from '../store/index'

function HomeScreen({data,data2}) {
   const dispatch = useDispatch()


  return (
      <div className=''>

          <Header />
          {/* {console.log(message)} */}
          <div className='flex'>
              <MainLeft data={data} />
              <MainRight data={data2} />
          </div>
          <NewsSection data={data2} />
{/* 
          <NewsSection />

          <NewsSection /> */}
    </div>
  )
}

export default HomeScreen