import Link from 'next/link';
import React, { useState } from 'react'
import WriteBlog from '../../src/components/WriteBlog';
import Posts from '../../src/screens/Posts';
import Profile from '../../src/screens/Profile';

var pClass = 'font-mono text-xl mb-8 cursor-pointer'

function Index() {
    const [page, setPage] = useState({
        writeBlog: true,
        posts: false,
        profile: false,
        terms: false
    })


    const writeHandler = (handler) => {

        setPage({
            [handler]: true
        })
    }



    return (
        <div className='w-full flex'>

            <div className='w-1/4 text-white rounded-md  '>
                <div className='px-10 py-32 h-screen fixed left-0 bg-blue-900'>
                    <Link href='/'>
                        <p className={`${pClass}`}>Home</p>
                    </Link>

                    <p onClick={() => writeHandler('writeBlog')}
                        className={`${pClass} ${page.writeBlog && 'bg-yellow-500 rounded px-3 py-2 '}`}>Write Blog</p>
                    <p onClick={() => writeHandler('posts')} className={`${pClass} ${page.posts && 'bg-yellow-500 rounded px-3 py-2 '}`}>My Posts</p>
                    <p onClick={() => writeHandler('profile')} className={`${pClass} ${page.profile && 'bg-yellow-500 rounded px-3 py-2 '}`}>Profile</p>
                    <p className={pClass}>Terms and Condition</p>
                    <p className={`${pClass} absolute bottom-5`}>Logout</p>

                </div>


            </div>
            <div className='w-3/4'>
                {page.writeBlog && <WriteBlog />}
                {page.posts && <Posts />}
                {page.profile && <Profile />}
            </div>
        </div>


    )
}

export default Index