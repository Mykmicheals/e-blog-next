import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import china from '../../public/images/china.jpeg'


function Posts() {

    const [posts, setPosts] = useState([])



    const fetchPosts = async () => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Token 6d2b88730c3a212ddf8686f97f9edd238e33bd98`);


        var requestOptions = {
            headers: myHeaders,
        };
        // const response = await fetch('http://userauth.pythonanywhere.com/my_posts/', requestOptions)
          const response = await fetch('http://127.0.0.1:8000/my_posts/', requestOptions)
        const data = await response.json()
        setPosts(data)
        console.log(data)
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <div className='mx-5'>
            <h2 className='text-center text-3xl my-5'>All your posts</h2>


            {posts.length > 0 && posts.map((each) => {
                return (
                    <div className='flex my-10 ' key={each.id}>
                        <div className='mx-5'>
                            <Image alt='china' src={each.image} height='200' objectFit="cover" width='400' />
                        </div>
                        <div>
                            <h3 className='text-xl mb-5 font-mono font-bold'>{each.title} </h3>
                            <p className='w-4/5 font-serif'>{each.description.slice(30)}</p>
                        </div>
                    </div>
                )
            })
            }

        </div>
    )
}

export default Posts