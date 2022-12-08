import React from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux'

const pClass = 'hover:text-red-700 cursor-pointer hover:border-b border-red-700 mx-5 mb-8'

function Nav({ showNav, width }) {     
   var widths = showNav ? 'w-2/3' : 'w-0'
     console.log(widths)

    const auth = useSelector((state) => state.auth)
    const isLoggedIn = auth.isLoggedIn
    return (
        <div className={`bg-gray-400 shadow-2 h-screen ${widths} z-10 left-0 fixed top-0 ts`}>
            <Link href='/'>
                <div className='flex'>
                    <h1 className='cursor-pointer text-3xl font-bold text-red-600 my-10 mx-3'>Essential</h1>
                </div>
            </Link>

            {console.log(showNav)}
            <div className='my-2'>
                <p className={pClass}>Home</p>
                <p className={pClass}>World Cup</p>
                <p className={pClass}>Lifestlye</p>
                <p className={pClass}>Economy</p>
                <p className={pClass}>Politics</p>
            </div>

            <div className='lg:flex gap-10 '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-800 mr-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>

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