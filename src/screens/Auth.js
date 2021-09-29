import React, { useState } from 'react'
import { TextField, Button } from '@mui/material';
import Header from '../components/Header'
import { useRouter } from "next/router";
import LoadingButton from '@mui/lab/LoadingButton';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/index';


// export const APPURL = 'http://userauth.pythonanywhere.com'
export const APPURL = 'https://userauth.pythonanywhere.com/'

function Auth() {
    const router = useRouter();
    const dispatch = useDispatch()

    const [signup, setSignup] = useState(false)
    const [error, setError] = useState('')
    const [fetchLoading, setLoading] = useState(false)

    function toggleHandler() {
        setSignup(!signup)
    }

    const [input, setInput] = useState({
        first_name: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const handleInput = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };


    async function authHandler() {
        setLoading(true)
        const response = await fetch(`${APPURL}/${signup ? 'signup/' : 'login/'}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(input),
            })
        setLoading(false)
        const data = await response.json()

        if (data.token) {
            router.push('/', { shallow: true })
            dispatch(authActions.login())
            dispatch(authActions.setUsername(data.first_name))
            dispatch(authActions.setToken(data.token))
            dispatch(authActions.setEmail(data.email))

        } else if (data.signup_sucess) {
            router.push('/auth/verify')
        }

        else {
            setError(data.detail)
        }
    }

    return (
        <div className='my-28'>
            <Header />
            <div className='grid place-items-center my-5 '>
                <div className='bg-white-100 grid place-items-center  shadow-lg p-10'>
                    <p className='text-red-600 my-5 text-sm'>{error}</p>
                    <h3>{signup ? 'Signup' : 'Login'}</h3>
                    <div className='my-2'>
                        {signup && <TextField onChange={handleInput} className='my-9 block w-full' id="outlined-basic" size='small' label="Username" name='first_name' variant="outlined" />}
                        <div className='my-5'>
                            <TextField onChange={handleInput} className='my-9 block' id="outlined-basic" size='small' name='email' label="Email" variant="outlined" />        
                    </div>
                        
                        <div>
                            <TextField onChange={handleInput} className='my-9 block' size='small' type="password" name='password' label="Password" variant="outlined" />
                       </div>

                       
                        <div className='my-5'>
                            {signup && <TextField onChange={handleInput} className='my-9 block' id="outlined-basic" size='small' type="password" label="Confirm Password" variant="outlined" />}
                            
                          </div>
                       

                    </div>
                    <LoadingButton loading={fetchLoading} onClick={authHandler} className='bg-red-600 hover:bg-red-700  text-white px-16 '>{signup ? 'Signup' : 'Login'}</LoadingButton>


                    {signup ? <p className='text-sm my-6'>Already have an account? <span onClick={toggleHandler} className='text-blue-900 mx-3 cursor-pointer'>Login</span></p> : <div>
                        <p className='font-mono text-sm mt-8 text-sm'> Don&apos;t have an account?<span onClick={toggleHandler} className='text-blue-900 mx-2 cursor-pointer'>Signup</span></p>
                        <p className='font-mono text-sm mt-2'> Forgot Password ? <span className='text-blue-900 mx-2 cursor-pointer'>Reset</span></p>
                    </div>}


                </div>


            </div>
        </div>

    )
}

export default Auth