import React from 'react'
import Header from '../../src/components/Header';
import { useRouter } from 'next/router';
import MainRight from '../../src/components/MainRight';
import Image from 'next/image'

function index() {
 const router = useRouter()
  const each = router.query

 
  return (
    <div>
        <Header />
        <div className='flex'>
     <div className='relative mx-8 w-2/3 my-4'> 

            <div className='mb-0 '>
                    <Image  width= '900' height='460' objectFit='cover' className='object-cover w-1/4 brightness-50 ' alt='chi' src={each.image} />
                </div>
                <div className='my-10 '>
                    <h3 className='text-center text-2xl  text-black '>{each.title}</h3>
                </div>

                <div>
                  <p className='font-mono text-xl leading-10 font-serif'>{each.description}</p>
                </div>

     </div>
    
        </div>
    </div>
  )
}

export default index