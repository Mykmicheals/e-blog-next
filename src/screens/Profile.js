import React, { useState } from 'react'
import Image from 'next/image';
import { chinaImage } from '../components/MainRight';
import TextField from '@mui/material/TextField';
import { useSelector } from 'react-redux';
import LoadingButton from '@mui/lab/LoadingButton';

import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


function Profile() {

  const [error, setError] = useState(false)
  const [sucess, setSucess] = useState(false)

  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [loading, setLoading] = useState(false)

  const userToken = useSelector((state) => state.auth.token)

  const passwordChange = async () => {

    if (password === password2) {
      setLoading(true)
      const response = await fetch('http://userauth.pythonanywhere.com/password/change/', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Authorization": `Token ${userToken}`
        },
        body: JSON.stringify({ 'password': password }),
      })
      setLoading(false)
      const data = await response.json()

      if (data.success) {
        setSucess(true)
        setError(false)
        setPassword('')
        setPassword2('')
      }

      console.log(data)

    } else {
      setError(true)
    }
    console.log(password)

  }

  const username = useSelector((state) => state.auth.username)
  const email = useSelector((state) => state.auth.email)

  return (
    <div>
      {error && <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity="error">Password Mismatch. The password does not match</Alert>
      </Stack>}
      {sucess && <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity="success">Password changed sucessfully</Alert>
      </Stack>}

      <h2 className='text-center text-3xl my-5'>My Profile</h2>

      <div className='flex justify-center my-10'>
        <Image className='rounded-full ' alt='profile' src={chinaImage} height='100' width='100' objectFit="cover" />
      </div>
      <div className='flex gap-16 justify-center'>
        <TextField id="standard-basic" value={username} />
        <TextField id="standard-basic" value={email} />
      </div>

      <h3 className='my-10 flex gap-16 justify-center my-10'>Change Password</h3>
      <div className='flex gap-16 justify-center'>
        <TextField onChange={(e) => (setPassword(e.target.value), setError(false))} id="standard-basic" type='password' label='enter new password' value={password} />
        <TextField onChange={(e) => (setPassword2(e.target.value))} id="standard-basic" value={password2} type='password' label='Confirm password' />
      </div>
      <div className='flex py-12 justify-center'>
        <LoadingButton loading={loading} onClick={passwordChange} className='hover:bg-blue-700 bg-blue-600  text-white '>Change Password</LoadingButton>
      </div>
    </div>
  )
}

export default Profile