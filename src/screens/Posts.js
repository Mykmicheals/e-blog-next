import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import china from '../../public/images/china.jpeg'
import { useSelector } from 'react-redux';


function Posts() {
    const userToken = useSelector((state) => state.auth.token)
    const [posts, setPosts] = useState([])
    const fetchPosts = async () => {


        var myHeaders = new Headers();
        //   myHeaders.append("Authorization", `Token 6d2b88730c3a212ddf8686f97f9edd238e33bd98`);
        myHeaders.append("Authorization", `Token ${userToken}`);


        var requestOptions = {
            headers: myHeaders,
        };
        // const response = await fetch('http://userauth.pythonanywhere.com/my_posts/', requestOptions)
        const response = await fetch('https://userauth.pythonanywhere.com/my_posts/', requestOptions)
        const data = await response.json()
        setPosts(data)
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
                            <p className='w-4/5 font-serif'>{each.description}</p>
                        </div>
                    </div>
                )
            })
            }

        </div>
    )
}

export default Posts