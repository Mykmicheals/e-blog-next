import Image from 'next/image'
import React from 'react'
import china from '../../public/images/child.jpg'
import moment from 'moment/moment'
import Link from 'next/link';

export const chinaImage = china

function MainRight({ data }) {
    const trendingNews = data.filter((each) => each.category.name === 'Tech')
    var shortTrending = trendingNews.splice(2, 5)

    return (

        <div className=' shadow-2xl p-3 my-12 lg:mt-32 w-full lg:w-1/3 '>
            {shortTrending.map((each) => {
                return (
                    <Link
                        key={each.id} href={{
                            pathname: `/newsdetail/${each.slug}/`,
                            query: {
                                name: "news",
                                image: each.image,
                                description: each.description,
                                title: each.title,
                                time: each.created,
                                id: each.id,
                                category: 'Tech'
                            },
                        }}>
                        <div className='flex my-3 gap-2 border-b border-gray-400 cursor-pointer' >
                            <div className=' w-80 lg:w-40 ml-1 mr-3'>
                                <Image width='700' height='400' alt='child' className='rounded-sm ' src={each.image} objectFit="cover" />
                            </div>
                            <div className='w-3/4 mt-5 lg:mt-1'>
                                <p className='md:w-3/4 text-sm mb-1 font-mono'>{each.title}</p>
                                <p className='text-sm text-red-600  pb-2'>{moment(each.created).startOf().fromNow()}</p>

                            </div>
                        </div>
                    </Link>
                )
            })}

        </div>
    )
}

export default MainRight