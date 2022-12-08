import Image from 'next/image'
import React from 'react'
import china from '../../public/images/china.jpeg'

import Slider from "react-slick";
import Link from 'next/link';

function MainLeft({ data }) {

    return (
        <div className='relative mx-0 lg:mx-8 w-full lg:w-2/3 mt-28 pointer'>

            <span className="flex h-3 w-3 mb-5 mx-5">
                <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-red-700 opacity-75"></span>

            </span>

            <Link href={{
                pathname: `/newsdetail/${data[0].slug}/`,
                query: {
                    name: "news",
                    image: data[0].image,
                    description: data[0].description,
                    title: data[0].title

                },
            }}>
                <div className='cursor-pointer'>
                    <div className='bg-gray-300 p-5'>
                        <p className='text-center font-serif text-2xl lg:text-3xl   text-black '>{data[0].title}</p>
                    </div>
                    <div className='mb-0 relative'>
                        <Image width='900' height='460' objectFit='cover' className='object-cover w-1/4 brightness-50 ' alt='chi' src={data[0].image} />
                        <p className='absolute bg-red-800 font-bold text-sm bottom-2 px-2 py-5 text-white'>LIFE UPDATES</p>
                    </div>
                    <p className='absolute top-1/2 text-white text-center font-sans  lg:text-2xl mx-4 md:mx-10'>{data[0].description.slice(0, 150)}</p>
                </div>

            </Link>



        </div>
    )
}

export default MainLeft