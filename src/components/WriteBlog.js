import React, { useEffect, useState } from 'react'
import { TextField } from '@mui/material/'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import dynamic from 'next/dynamic'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux'
import { authActions } from '../store'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import LoadingButton from '@mui/lab/LoadingButton';


import APPURL from '../screens/Auth';

const Editor = dynamic(
    () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
    { ssr: false }
)



function WriteBlog() {

    const [blog, setBlog] = useState({
        title: '',
        category: '',
        description: ''
    })

    const userToken = useSelector((state) => state.auth.token)
    const [image, setImage] = useState(null)
    const [formError, setFormError] = useState('')
    const [sucess, setSucess] = useState(false)
    const [error, setError] = useState(false)

    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setBlog({
            ...blog,
            [e.target.name]: e.target.value
        })
        setError(false)
        setSucess(false)
    }

    const handleImage = (e) => {
        setImage(e.target.files[0])
        setError(false)
        setSucess(false)
    }

    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
    );




    const submitHandler = async (e) => {
        e.preventDefault()
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Token ${userToken}`);
        //   myHeaders.append("Authorization", `Token 6d2b88730c3a212ddf8686f97f9edd238e33bd98`);
        var formdata = new FormData();
        formdata.append("image", image);
        formdata.append("description", blog.description);
        formdata.append("title", blog.title);
        formdata.append("category", blog.category);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
        };

        const formValid = blog.title != '' && blog.description != '' && blog.category != '' && image != null


        if (formValid) {
            const response = await fetch(`https://userauth.pythonanywhere.com/posts/`, requestOptions)
            setLoading(true)
            // const response = await fetch(`http://userauth.pythonanywhere.com/posts/`, requestOptions)
            const data = await response.json()
            setLoading(false)
            console.log(data)
            if (data && data.created) {
                setSucess(true)
                setBlog({
                    'title': '',
                    'category': '',
                })
                setEditorState(EditorState.createEmpty())

            }
        }
        else {
            setError(true)
        }

    }



    const updateTextDescription = async (state) => {

        await setEditorState(state);

        const data = convertToRaw(editorState.getCurrentContent());

        setBlog({
            ...blog,
            ['description']: data.blocks[0].text
        })

    };



    return (

        <div>
            {sucess && <Stack sx={{ width: '100%' }} spacing={2}>

                <Alert severity="success">Your post has been submitted for review</Alert>
            </Stack>}

            {error && <Stack sx={{ width: '100%' }} spacing={2}>

                <Alert severity="warning">Please fill all input fields</Alert>
            </Stack>}
            <h2 className='text-center text-3xl mt-5 mb-1'>Write your blog here</h2>
            <div className='mx-10'>
                <TextField className='flex w-3/4 py-5 mx-5 my-3' id="standard-basic" label="Blog Title" variant="standard" name='title'
                    value={blog.title}
                    onChange={handleChange} />
                <div>
                    <FormControl sx={{ m: 1, minWidth: 390 }}>
                        <InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
                        <Select

                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={blog.category}
                            name='category'
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value='Tech'>Tech</MenuItem>
                            <MenuItem value='Politics'>Politics</MenuItem>
                            <MenuItem value='Fashion'>Fashion</MenuItem>
                            <MenuItem value='LifeSyle'>LifeSyle</MenuItem>
                            <MenuItem value='Sport'>Sport</MenuItem>
                        </Select>

                    </FormControl>

                    <Button className='mx-24 mt-4 bg-blue-700' variant="contained" component="label">
                        Upload Image
                        <input onChange={handleImage} hidden accept="image/*" multiple type="file" />
                    </Button>


                </div>
                <div className='my-10'>
                    <Editor
                        editorState={editorState}
                        onEditorStateChange={updateTextDescription}
                        toolbarClassName="toolbarClassName"
                        wrapperClassName=""
                        editorClassName="border-2 border-gray-500 px-5 py-10"
                        value={blog.description}
                    />
                </div>



            </div>

            <div className='flex items-center justify-center'>
                <LoadingButton loading={loading} onClick={submitHandler} className='bg-blue-700 my-10' variant="contained" component="label">POST BLOG</LoadingButton>
            </div>
        </div>

    )
}

export default WriteBlog