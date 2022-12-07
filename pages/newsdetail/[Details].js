import React, { useState } from 'react'
import Header from '../../src/components/Header';
import { useRouter } from 'next/router';
import MainRight from '../../src/components/MainRight';
import Image from 'next/image'
import TimeAgo from 'javascript-time-ago'
import TextField from '@mui/material/TextField';
import en from 'javascript-time-ago/locale/en'
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';


TimeAgo.addDefaultLocale(en)



function Index() {
  const router = useRouter()
  const each = router.query
  const [comment, setComment] = useState('')

  const commentHandler = (e) => {
    setComment(e.target.value)
  }

  const userToken = useSelector((state) => state.auth.token)

  const postComment = async (e) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Token ${userToken}`);
    //  myHeaders.append("Authorization", `Token 6d2b88730c3a212ddf8686f97f9edd238e33bd98`);
    var formdata = new FormData();
    formdata.append("body", comment);
    formdata.append("post", each.id);

    console.log(typeof (+each.id))

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
    };
    const response = await fetch('http://userauth.pythonanywhere.com/comments/', requestOptions)
    const data = await response.json()
    console.log(data)
  }

  return (
    <div>
      <Header />
      <div className='flex'>
        <div className='relative mx-8 w-full lg:w-2/3 my-4'>

          <div className='mb-0 '>
            <Image width='900' height='460' objectFit='cover' className='object-cover w-1/4 brightness-50 ' alt='chi' src={each.image} />
            {console.log(each.time)}
            <p className='my-4 text-red-700 italic'>8 days ago</p>
          </div>
          <div className='my-10 '>
            <h3 className='text-center text-2xl font-bold text-black '>{each.title}</h3>
          </div>

          <div>

            <p className='font-mono text-xl leading-10 font-serif'>{each.description}</p>
          </div>
          {/* <TextField onChange={commentHandler} id="standard-basic" className='my-5 mx-10 block' label="Comment" variant="standard" />
          <Button onClick={postComment} variant="contained" className='bg-blue-400 block my-5 mx-10'>Comment</Button> */}

        </div>

      </div>

    </div>
  )
}

export default Index