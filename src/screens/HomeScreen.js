import React, { useEffect } from 'react'
import Header from '../components/Header'
import MainLeft from '../components/MainLeft';
import MainRight from '../components/MainRight';
import NewsSection from '../components/NewsSection';
import { useDispatch } from 'react-redux';
import { newsActions } from '../store';


function HomeScreen({ data, data2, posts }) {
  const dispatch = useDispatch()

  const updateData = () => {
    dispatch(newsActions.storeNews(data2))
    dispatch(newsActions.storePosts(posts))
  }

  useEffect(() => {
    updateData()
  })

  return (
    <div className=''>

      <Header />
      {console.log(posts)}
      <div className='flex-row lg:flex'>
        <MainLeft data={data} />
        <MainRight data={data2} />
      </div>
      <NewsSection data={data2} />

    </div>
  )
}

export default HomeScreen