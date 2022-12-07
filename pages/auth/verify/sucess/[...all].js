import React from 'react'
import Link from 'next/link'
import Header from '../../../../src/components/Header'

export default function index() {
    return (
        <div>
            <Header />
            <div className='grid h-screen place-items-center '>
                <div className='bg-red-100 p-10 rounded font-mono'>
                    <h3 className='text-xl'>Your Email Address has been sucessfully Verified</h3>
                    <a href='/auth'>
                        <p className='px-10 py-3 bg-blue-700 text-white my-10 w-1/4 text-center'>Login</p>
                    </a>

                </div>


            </div>
        </div>

    )
}
