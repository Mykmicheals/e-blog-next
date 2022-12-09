import React from 'react'
import Link from 'next/link'
import TextField from '@mui/material/TextField';

function Footer() {
    return (
        <div className='mt-20 w-full '>
            <div className='px-20 w-full py-12 shadow-lg flex justify-center bg-gray-300'>
                <Link href='/'>
                    <div className='w-1/3'>
                        <h1 className='cursor-pointer text-3xl font-bold text-red-600'>Essential</h1>
                        <p className='font-serif mt-6'>All rights reserved 2022 @essential</p>
                    </div>
                </Link>
                <div className='w-1/3 flex grid grid-row'>
                    <Link className='font-mono block text-red' href='/'>Home</Link>
            
                    <Link href='/'>Politics</Link>
                    <Link href='/'>Sports</Link>
                </div>

                <div className='w-1/3'>
                    <TextField id="standard-basic" label="Newsletter" variant="standard" />
                    <p className='mt-4 bg-red-800 rounded px-4 py-2 text-white w-1/3 cursor-pointer hover:bg-red-900'>Submit Email</p>
                </div>
            </div>

        </div>
    )
}

export default Footer