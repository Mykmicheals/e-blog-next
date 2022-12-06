import React from 'react'
import china from '../../public/images/china.jpeg'
import Image from 'next/image'


var h3Class = 'bg-gray-200 px-2 py-3 font-bold'
var h2Class = 'font-bold text-xl my-3  font-sans pb-5 ml-1 border-b-2 border-gray-500'

function News2({title, data, category}) {
    const news = data.filter((each)=>each.category.name===category)

  return (
    <div className='basis-1/2 mr-4'>
            <div>
                <h3 className={h3Class}>{title}</h3>
                <Image height='590' width='800' objectFit='cover' className='object-cover w-1/4 brightness-50 ' alt='chi' src={news[0]?.image} />
               <h2 className={h2Class}>{news[0]?.title}</h2>
               <div className='flex mb-3'>
                   <div className='w-1/3 mr-6'>
                       <Image width='800' height='450' objectFit='cover' className='object-cover brightness-50 ' alt='chi' src={news[1]?.image} />
                   </div>
               <h3 className='font-bold my-3 '>{news[1]?.title}</h3>

               </div>

                     <div className='flex '>
                   <div className='w-1/3 mr-6'>
                       <Image width='800' height='450' objectFit='cover' className='object-cover brightness-50 ' alt='chi' src={news[2]?.image} />
                   </div>
                   <h3 className='font-bold my-3 '>{news[2]?.title}</h3>

               </div>
            </div>


        </div>
  )
}

export default News2