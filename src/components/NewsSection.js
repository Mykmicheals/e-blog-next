import React from 'react'
import china from '../../public/images/china.jpeg'
import Image from 'next/image'
import News4 from './News4';
import News2 from './News2';

var h3Class = 'bg-gray-200 px-2 py-3 font-bold'
var h2Class = 'font-bold text-xl my-3  font-sans pb-5 ml-1 border-b-2 border-gray-500'

function NewsSection({data}) {
  return (

    <div>
    <div className='flex  justify-center mx-10 my-10 flex-col lg:flex-row'>
       
    <News4 
    title= 'Tech News'
    data = {data}
    category = 'Tech'
    />

      <News2 
    title= 'Latest News'
    data = {data}
    category = 'Featured'
      />


    <News4 
    title= 'Politics'
    data = {data}
    category = 'Politics'
    />


      </div>
      

      <div className='flex justify-center mx-10 my-10 flex-col lg:flex-row'>

        <News4
          title='Sports'
          data={data}
          category='Sports'
        />


        <News4
          title='Featured'
          data={data}
          category='Featured'
        />


        <News4
          title='Fashion'
          data={data}
          category='Fashion'
        />


        <News4
          title='Lifestyle'
          data={data}
          category='Lifestyle'
        />
      </div>

      <div className='flex  justify-center mx-10 my-10 flex-col lg:flex-row'>

        <News4
          title='Trending'
          data={data}
          category='Trending'
        />

        <News2
          title='Global News'
          data={data}
          category='Global'
        />


        <News4
          title='Weather'
          data={data}
          category='Weather'
        />


      </div>

    </div>


  )
}

export default NewsSection