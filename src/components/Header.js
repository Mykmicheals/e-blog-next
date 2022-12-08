import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import logo from '../../public/images/logo.svg'
import { authActions } from '../store'
import Nav from './Nav'

const pClass = 'hover:text-red-700 cursor-pointer hover:border-b border-red-700'

function Header() {
    const auth = useSelector((state) => state.auth)
    const isLoggedIn = auth.isLoggedIn
    const [showNav, setNav] = useState(false)

    return (
        <div className='shadow-lg flex px-5 lg:px-20 gap-36 py-7 mb-20 fixed z-50 bg-gray-300 top-0 w-full'>
            <Link href='/'>
                <div className='flex'>
                    <h1 className='cursor-pointer text-3xl font-bold text-red-600'>Essential</h1>
                </div>
            </Link>


            <div className='md:flex gap-10 lg:gap-16 my-1 hidden'>
                <Link href='/'>
                    <p className={pClass}>Home</p>
                </Link>

                <p className={pClass}>World Cup</p>
                <Link href={{
                    pathname: `/allnews/`,
                    query: {
                        title: 'Lifestyle'
                    },
                }}>
                    <p className={pClass}>Lifestlye</p>
                </Link>

                <Link
                    href={{
                        pathname: `/allnews/`,
                        query: {
                            title: 'Economy'
                        },
                    }}
                >
                    <p className={pClass}>Economy</p>
                </Link>



                <Link href={{
                    pathname: `/allnews/`,
                    query: {
                        title: 'Poltics'
                    },
                }}>
                    <p className={pClass}>Politics</p>
                </Link>

            </div>

            <div className='lg:flex gap-10 hidden'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-800 mr-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>

                {isLoggedIn ?
                    <Link href='/dashboard'>
                        <p className='cursor-pointer bg-red-700 text-white px-3 py-2 rounded'>Dashboard</p>
                    </Link>
                    :
                    <Link href='/auth'>
                        <p className='cursor-pointer bg-red-700 text-white px-3 py-2 rounded'>Login</p>
                    </Link>
                }
            </div>
        
            <svg onClick={() => setNav(!showNav)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute cursor-pointer right-10 lg:right-20 flex top-8 md:hidden">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>


            {showNav &&    
         
             <Nav showNav={showNav}   
                />

             } 
       </div>
    )
}




export default Header