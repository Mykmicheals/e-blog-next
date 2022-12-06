import React,{useState} from 'react'
import WriteBlog from '../../src/components/WriteBlog';
import Posts from '../../src/screens/Posts';
import Profile from '../../src/screens/Profile';

var pClass = 'font-mono text-xl mb-8 cursor-pointer'

function index() {
    const [page,setPage] = useState({
        writeBlog:true,
        posts:false,
        profile:false,
        terms:false
    })


        const writeHandler = (handler)=>{
        
        setPage({
            [handler]:true
        })
    }



    return (
        <div className='w-full flex'>
           
               {/* {console.log(page.posts)} */}
            <div className=' h-screen bg-blue-900 w-1/4 text-white rounded-md relative static'>
                <div className='px-10 py-32'>
                    <p className={`${pClass}`}>Home</p>
                    <p onClick={()=>writeHandler('writeBlog')}
                     className={`${pClass} ${page.writeBlog && 'bg-yellow-500 rounded px-3 py-2 '}`}>Write Blog</p>
                    <p onClick={()=>writeHandler('posts')}  className={`${pClass} ${page.posts && 'bg-yellow-500 rounded px-3 py-2 '}`}>My Posts</p>
                    <p onClick={()=>writeHandler('profile')} className={`${pClass} ${page.profile && 'bg-yellow-500 rounded px-3 py-2 '}`}>Profile</p>
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

export default index