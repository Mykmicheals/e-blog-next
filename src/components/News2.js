import React from 'react'
import china from '../../public/images/china.jpeg'
import Image from 'next/image'
import Link from 'next/link'


var h3Class = 'bg-gray-200 px-2 py-3 font-bold'
var h2Class = 'font-bold text-xl my-3  font-sans pb-5 ml-1 border-b-2 border-gray-500'

function News2({ title, data, category }) {
    const news = data.filter((each) => each.category.name === category)

    return (
        <div className='basis-1/2 mr-4'>
            <div>

                <h3 className={h3Class}>{title}</h3>

                <Link href={{
                    pathname: `/newsdetail/${news[0].slug}/`,
                    query: {
                        name: "news",
                        image: news[9].image,
                        description: news[9].description,
                        title: news[9].title

                    },
                }}>
                    <div className='cursor-pointer'>
                        <Image height='590' width='800' objectFit='cover'
                            className='object-cover w-1/4 brightness-50'
                            alt='chi' src={news[9]?.image} />
                        <h2 className={h2Class}>{news[9]?.title}</h2>
                    </div>
                </Link>
                <Link href={{
                    pathname: `/newsdetail/${news[0].slug}/`,
                    query: {
                        name: "news",
                        image: news[1].image,
                        description: news[1].description,
                        title: news[1].title

                    },
                }}>
                    <div className='flex mb-3 cursor-pointer'>
                        <div className=' w-1/2 md:w-1/3 mr-6'>
                            <Image width='800' height='450' objectFit='cover' className='object-cover brightness-50 ' alt='chi' src={news[1]?.image} />
                        </div>
                       <h3 className=' my-3 w-1/2 md:w-2/3 text-sm md:text-xl font-mono'>{news[9]?.title}</h3>

                    </div>
                </Link>

                <Link className='cursor-pointer' href={{
                    pathname: `/newsdetail/${news[0].slug}/`,
                    query: {
                        name: "news",
                        image: news[0].image,
                        description: news[0].description,
                        title: news[0].title

                    },
                }}>

                   <div className='flex mb-3 cursor-pointer'>
                        <div className=' w-1/2 md:w-1/3 mr-6'>
                            <Image width='800' height='450' objectFit='cover' className='object-cover brightness-50 ' alt='chi' src={news[2]?.image} />
                        </div>
                        <h3 className=' my-3 w-1/2 md:w-2/3 text-sm md:text-xl font-mono'>{news[2]?.title}</h3>

                    </div>

                </Link>

              
            </div>


        </div>
    )
}

export default News2