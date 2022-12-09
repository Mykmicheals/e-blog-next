import React, { useEffect } from 'react'
import Header from '../../src/components/Header'
import Image from 'next/image'
import { useRouter } from 'next/router';
import Link from 'next/link'

import { useSelector } from 'react-redux';
import { APPURL } from '../../src/screens/Auth';
import News4 from '../../src/components/News4';


function Index({ data, posts }) {
    const router = useRouter()
    const path = router.query.title

    var name = router.query.name


    const filterData = data.filter((each) => each.category.name === path)

    return (
        <div>
            <Header />

            <div className='grid md:grid-cols-2 lg:grid-cols-4 rounded mx-10 my-32 gap-5'>

                {name === 'posts' ? posts.map((each) => {
                    return (

                        <Link
                            key={each.id} href={{
                                pathname: `/newsdetail/${each.slug}/`,
                                query: {
                                    // name: "news",
                                    image: each.image,
                                    description: each.description,
                                    title: each.title,
                                    time: each.created,
                                    id: each.id
                                },
                            }}>

                            <div className='w-full bg-gray-100 shadow-lg'>
                                <Image alt='readers image' width='400' height='400' src={each.image} />
                                <h1 className='px-5 mx-2 my-3'>{each.title}</h1>
                                <p className='px-5 mx-2 text-sm my-3'>{each.description.slice(0, 120)} </p>
                            </div>
                        </Link>
                    )
                }) : filterData.map((each) => {
                    return (

                        <Link
                            key={each.id} href={{
                                pathname: `/newsdetail/${each.slug}/`,
                                query: {
                                    // name: "news",
                                    image: each.image,
                                    description: each.description,
                                    title: each.title,
                                    time: each.created,
                                    id: each.id
                                },
                            }}>

                            <div className='w-full bg-gray-100 shadow-lg'>
                                <Image alt='readers image' width='400' height='400' src={each.image} />
                                <h1 className='px-5 mx-2 my-3'>{each.title}</h1>
                                <p className='px-5 mx-2 text-sm my-3'>{each.description.slice(0, 120)} </p>
                            </div>
                        </Link>
                    )
                })}

                { }


            </div>


        </div>
    )
}

export async function getStaticProps() {

    const dataResponse = await fetch(`${APPURL}/news/`)
    const data = await dataResponse.json()

    const p = await fetch(`${APPURL}/posts/`)
    const posts = await p.json()

    return { props: { data, posts }, };
}

export default Index