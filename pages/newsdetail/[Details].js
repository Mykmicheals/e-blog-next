import React, { useState, useEffect } from 'react'
import Header from '../../src/components/Header';
import { useRouter } from 'next/router';
import MainRight from '../../src/components/MainRight';
import Footer from '../../src/components/Footer';
import Image from 'next/image'
import TextField from '@mui/material/TextField';
import en from 'javascript-time-ago/locale/en'
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import { APPURL } from '../../src/screens/Auth';
import moment from 'moment/moment'
import Link from 'next/link';



function Index() {

  const [posts, setPosts] = useState([])
  const router = useRouter()
  const each = router.query
  const [comment, setComment] = useState('')
  const [loading, setLoading] = useState(false)

  const commentHandler = (e) => {
    setComment(e.target.value)
  }

  const fetchPost = async () => {
    setLoading(true)
    const response = await fetch(`${APPURL}/news`)
    const data = await response.json()
    const filteredData = data.filter((post) => post.category.name === 'Politics')
    setLoading(false)
    //  const news = data.filter((each) => each.category.name === category)
    setPosts(filteredData)

  }

  useEffect(() => {
    fetchPost()

  }, [])


  var relatedPosts = posts.splice(0, 10)

  const userToken = useSelector((state) => state.auth.token)

  const postComment = async (e) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Token ${userToken}`);
    //  myHeaders.append("Authorization", `Token 6d2b88730c3a212ddf8686f97f9edd238e33bd98`);
    var formdata = new FormData();
    formdata.append("body", comment);
    formdata.append("post", each.id);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
    };
    const response = await fetch('https://userauth.pythonanywhere.com/comments/', requestOptions)
    const data = await response.json()
  }


  return (
    <div>
      <Header />
      <div className='flex my-28'>
        <div className='relative mx-8 w-full  my-4'>

          <div className='mb-0 '>
            <Image width='1900' height='960' objectFit='cover' className='object-cover w-1/4 brightness-50 ' alt='chi' src={each.image} />

            <p className='my-4 text-red-700 italic'>8 days ago</p>
          </div>
          <div className='my-10 '>
            <h3 className='text-center text-xl lg:text-2xl font-bold text-black '>{each.title}</h3>
          </div>

          <div>

            <p className='font-mono  lg:text-xl leading-10 font-serif'>{each.description}</p>
          </div>
          <button className='bg-blue-500 p-3' onClick={() => { router.push('/', undefined, { shallow: true }) }}>Back</button>
          {/* <TextField onChange={commentHandler} id="standard-basic" className='my-5 mx-10 block' label="Comment" variant="standard" />
          <Button onClick={postComment} variant="contained" className='bg-blue-400 block my-5 mx-10'>Comment</Button> */}

        </div>

      </div>

      <Footer />

    </div>
  )
}

export default Index
