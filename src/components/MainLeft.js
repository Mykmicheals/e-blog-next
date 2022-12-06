import Image from 'next/image'
import React from 'react'
import china from '../../public/images/china.jpeg'

import Slider from "react-slick";

function MainLeft({data}) {
    var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
    return (
        <div className='relative mx-8 w-2/3 my-4'>
   
            <Slider {...settings}>
                {data.map((each)=>{
    return (           <div className='relative p-10'>
                <div className='mb-0 '>
                    <Image  width= '900' height='460' objectFit='cover' className='object-cover w-1/4 brightness-50 ' alt='chi' src={each.image} />
                </div>
                <div className='z-50 bottom-130 bg-gray-300 p-5'>
                    <p className='text-center  text-black '>{each.title}</p>
                </div>
                  
               
            </div>)
                })}
            

  
            </Slider>
          
        </div>
    )
}

export default MainLeft