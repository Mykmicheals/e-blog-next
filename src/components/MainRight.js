import Image from 'next/image'
import React from 'react'
import china from '../../public/images/child.jpg'
// import { Link } from 'next/link';
import  Link  from 'next/link';

export const chinaImage = china

function MainRight({data}) {
    const trendingNews = data.filter((each)=>each.category.name==='Tech')
   var shortTrending = trendingNews.splice(0,6)
   
    return (

        <div className='bg-red my-5 w-1/3 '>

         

              {shortTrending.map((each)=>{
                    return ( 
                    <Link href={{
                    pathname: `/newsdetail/${each.slug}/`,
                    query: { 
                        name: "news" ,
                         image: each.image,
                         description:each.description,
                         title :each.title
                        
                    },
                  }}>
              
                    <div key={each.id} className='flex my-3 gap-2' >
                <div className=' w-40 mr-3'>
                <Image width='700' height = '400' alt='child' className='rounded-sm ' src={each.image} objectFit="cover" />
                </div>
                <div className='w-3/4'>
                    <p className='w-3/4 text-sm font-bold'>{each.title}</p>
    
                </div>
            </div>
           </Link>
              )
              }) }

        </div>
    )
}

export default MainRight