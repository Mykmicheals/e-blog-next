import React from 'react'
import  Image  from 'next/image';
import china from '../../public/images/china.jpeg'

import { chinaImage } from '../components/MainRight';

function Posts() {
  return (
    <div className='mx-5'>
          <h2 className='text-center text-3xl my-5'>All your posts</h2>
          <div className='flex my-10 '>
            <div className='mx-5'>
                <Image alt='china' src={chinaImage} height='200' objectFit="cover"  width='400' />
            </div>
            <div>
                <h3 className='text-xl mb-5 font-mono font-bold'>The title of the blog </h3>
                <p className='4/5 font-serif'>This is your blog that you have written, congratulations</p>
            </div>
          </div>

           <div className='flex my-10 '>
            <div className='mx-5'>
                <Image alt='china' src={chinaImage} height='200' objectFit="cover"  width='400' />
            </div>
            <div>
                <h3 className='text-xl mb-5 font-mono font-bold'>The title of the blog </h3>
                <p className='4/5 font-serif'>This is your blog that you have written, congratulations</p>
            </div>
          </div>

           <div className='flex my-10 '>
            <div className='mx-5'>
                <Image alt='china' src={chinaImage} height='200' objectFit="cover"  width='400' />
            </div>
            <div>
                <h3 className='text-xl mb-5 font-mono font-bold'>The title of the blog </h3>
                <p className='4/5 font-serif'>This is your blog that you have written, congratulations</p>
            </div>
          </div>
    </div>
  )
}

export default Posts