import React from 'react'
import china from '../../public/images/china.jpeg'
import Image from 'next/image'


var h3Class = 'bg-gray-200 px-2 py-3 font-bold'
var h2Class = 'font-bold text-xl my-3  font-sans pb-5 ml-1 border-b-2 border-gray-500'
function News4({title, data,category}) {

     const news = data.filter((each)=>each.category.name===category)
     const shortNews = news.splice(1,5)

  return (
       <div className='w-full basis-full mr-5 lg:basis-1/4'>
            <div>
              
                {/* {console.log(shortNews)} */}
                <h3 className={h3Class}>{title}</h3>
                <Image width='450' height='360' objectFit='cover' className='object-cover w-1/4 brightness-50' alt='chi' src={news[0].image} />
                <h2 className={h2Class}>{news[0].title}</h2>
               {shortNews.map((each)=>{
            return(
                  <div key={each.id}>
                    <p className='text-sm border-b-2 border-gray-300 mt-4 pb-4'>{each.title}.</p>
                </div>
            )
               })}

            </div>


        </div>
  )
}

export default News4