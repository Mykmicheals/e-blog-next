import React from 'react'
import  Image  from 'next/image';
import { chinaImage } from '../components/MainRight';
import TextField from '@mui/material/TextField';


function Profile() {
  return (
    <div>
        <h2 className='text-center text-3xl my-5'>My Profile</h2>
        <div className='flex justify-center my-10'>
          <Image className='rounded-full ' src={chinaImage} height='100' width='100' objectFit="cover" />
        </div>
        <div className='flex gap-16 justify-center'>
          <TextField id="standard-basic" value="Johnson" />
           <TextField id="standard-basic" value="John@gmail.com" />
        </div>

      <h3 className='my-10 flex gap-16 justify-center my-10'>Change Password</h3>
 <div className='flex gap-16 justify-center'>
          <TextField id="standard-basic" type='password' label='enter new password' />
           <TextField id="standard-basic" typs='password' label='Confirm password' />
        </div>

<div>
          
</div>



    </div>
  )
}

export default Profile