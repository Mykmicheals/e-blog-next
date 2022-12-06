import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import logo from '../../public/images/logo.svg'
import { authActions } from '../store'

function Header() {
    const auth = useSelector((state) => state.auth)
    const isLoggedIn = auth.isLoggedIn

    return (
        <div className='relative shadow-lg flex px-20 gap-36 py-7 '>
       
            <div className='flex'>
                <h1 className='text-3xl font-bold text-red-600'>Essential</h1>
            </div>

            <div className='md:flex gap-10 lg:gap-16 my-1 hidden'>
                <p>Home</p>
                <p className='flex-none'>World Cup</p>
                <p>Lifestlye</p>
                <p>Economy</p>
                <p>Politics</p>
            </div>

            <div className='lg:flex gap-10 hidden'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>

                {isLoggedIn ?
                    <Link href='dashboard'>
                        <p className='hover:cursor-pointer'>Dashboard</p>
                   </Link>
                    :
                    <Link href='auth'>
                        <p className='cursor-pointer'>Login</p>
                    </Link>
                }
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute right-20 flex top-8 md:hidden">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

        </div>
    )
}




export default Header