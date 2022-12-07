import React from 'react'
import Header from '../../../src/components/Header'

function index() {
    return (
        <div>
            <Header />
            <div className='grid h-screen place-items-center '>
                <div className='bg-red-100 p-10 rounded font-mono'>
                    <h3 className='text-xl'>A verification Link has been sent to your email</h3>
                </div>


            </div>
        </div>

    )
}

export default index