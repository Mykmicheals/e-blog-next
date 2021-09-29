import React from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux'

const pClass = 'hover:text-red-700 cursor-pointer hover:border-b border-red-700 mx-5 mb-8'

function Nav({ showNav, width }) {     
   var widths = showNav ? 'w-2/3' : 'w-0'
    const auth = useSelector((state) => state.auth)
    const isLoggedIn = auth.isLoggedIn
    return (
        <div className={`bg-gray-400 shadow-2 h-screen ${widths} z-10 left-0 fixed top-0 ts`}>

            <Link href='/'>
                <div className='flex'>
                    <h1 className='cursor-pointer text-3xl font-bold text-red-600 my-10 mx-3'>Essential</h1>
                </div>
            </Link>


            <div className='my-2'>
                {/* <p className={pClass}>Home</p>
                <p className={pClass}>World Cup</p>
                <p className={pClass}>Lifestlye</p>
                <p className={pClass}>Economy</p>
                <p className={pClass}>Politics</p> */}

                <Link href='/'>
                    <p className={pClass}>Home</p>
                </Link>

                <Link href={{
                    pathname: `/allnews/`,
                    query: {
                        title: 'posts',
                        name: 'posts'
                    },
                }}>

                    <p className={pClass}>User Posts</p>
                </Link>
                <Link href={{
                    pathname: `/allnews/`,
                    query: {
                        title: 'Lifestyle',
                        name: 'lifestyle'
                    },
                }}>
                    <p className={pClass}>Lifestlye</p>
                </Link>

                <Link
                    href={{
                        pathname: `/allnews/`,
                        query: {
                            title: 'Economy',
                            name: 'economy'
                        },
                    }}
                >
                    <p className={pClass}>Economy</p>
                </Link>



                <Link href={{
                    pathname: `/allnews/`,
                    query: {
                        title: 'Poltics',
                        name: 'politics'
                    },
                }}>
                    <p className={pClass}>Politics</p>
                </Link>

            </div>

            <div className='lg:flex gap-10 '>
            

                {isLoggedIn ?
                    <Link href='/dashboard'>
                        <p className='cursor-pointer bg-red-700 text-white px-3 py-2 rounded'>Dashboard</p>
                    </Link>
                    :
                    <Link href='/auth'>
                        <p className='cursor-pointer bg-red-700 text-white px-3 w-1/2 mx-5 py-2 rounded'>Login</p>
                    </Link>
                }
            </div>
        </div>
    )
}

export default Nav