import Image from 'next/image'
import React from 'react'
import china from '../../public/images/china.jpeg'

import Slider from "react-slick";
import Link from 'next/link';

function MainLeft({ data }) {

    return (
        <div className='relative mx-0 lg:mx-8 w-full lg:w-2/3 my-4 pointer'>

                     <Link href={{
                        pathname: `/newsdetail/${data[0].slug}/`,
                        query: {
                            name: "news",
                            image: data[0].image,
                            description: data[0].description,
                            title: data[0].title

                        },
                    }}>
                <div className=''>
                    <div className='bg-gray-300 p-5'>
                        <p className='text-center font-serif text-3xl   text-black '>{data[0].title}</p>
                    </div>
                    <div className='mb-0 relative'>
                        <Image width='900' height='460' objectFit='cover' className='object-cover w-1/4 brightness-50 ' alt='chi' src={data[0].image} />
                        <p className='absolute bg-red-800 font-bold text-sm bottom-2 px-2 py-5 text-white'>LIFE UPDATES</p>
                    </div>

                </div>

            </Link>



        </div>
    )
}

export default MainLeft