import React,{useEffect} from 'react'
import Header from '../../src/components/Header'
import Image from 'next/image'
import china from '../../public/images/china.jpeg'



function Index() {

const fetchPostHandler=async()=>{
    const response = await fetch('http://userauth.pythonanywhere.com/posts')
    const data = await response.json()
    console.log(data)

}

useEffect(()=>{
    fetchPostHandler()
},[])

    return (
        <div>
            <Header />
            <div className='flex mx-10 my-12 gap-5'>
                <div className='w-1/4 pt-10 bg-gray-300 '>
                    <Image alt='readers image' width='400' height='400' className='mt-10' src={china} />
                    <h1 className='px-5 text-xl py-3'>This is the title of the readers post</h1>
                    <p>This is the new description of the readers post </p>
                </div>

                            <div className='w-1/4 pt-10'>
                    <Image alt='readers image' width='400' height='400' className='mt-10' src={china} />
                    <h1>This is the title of the readers post</h1>
                    <p>This is the new description of the readers post </p>
                </div>

                            <div className='w-1/4 pt-10'>
                    <Image alt='readers image' width='400' height='400' className='mt-10' src={china} />
                    <h1>This is the title of the readers post</h1>
                    <p>This is the new description of the readers post </p>
                </div>

                            <div className='w-1/4 pt-10'>
                    <Image alt='readers image' width='400' height='400' className='mt-10' src={china} />
                    <h1>This is the title of the readers post</h1>
                    <p>This is the new description of the readers post </p>
                </div>

            </div>

        </div>
    )
}

export default Index