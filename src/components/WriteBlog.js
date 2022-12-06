import React, { useEffect, useState } from 'react'
import { TextField } from '@mui/material/'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from 'draft-js';
import dynamic from 'next/dynamic'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux'
import { authActions } from '../store'
import AppUrl from '../'
import  APPURL  from '../screens/Auth';

const Editor = dynamic(
    () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
    { ssr:false }
)


function WriteBlog() {
    APPURL
    const [age, setAge] = React.useState('');
    const [blog,setBlog] = useState({
        title:'',
        category:''
    })

     const userToken = useSelector((state) => state.auth.token)
    const [image, setImage] = useState(null)

    const [loading,setLoading] = useState

   const handleChange=(e)=>{
        setBlog({
            ...blog,
            [e.target.name]:e.target.value
        })
    }

    const handleImage = (e) =>{
        setImage(e.target.files[0])
    }

    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
    );


      const submitHandler = (e) => {
    e.preventDefault()
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Token ${userToken}`);
    var formdata = new FormData();
    formdata.append("image", image);
   // formdata.append("description", value);
    formdata.append("title", blog.title);


    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
    };

    setLoading(true)

    fetch(`${APPURL}/posts/`, requestOptions)
      .then(response => response.json())
      .then(result => {console.log(result)
        toast.success('post sent for approval')})
      .catch(error => {console.log('error', error)
;
    })
      
      setTimeout(() => {
        setLoading(false)
      }, 1500);

  }

    const updateTextDescription = async (state) => {

        await setEditorState(state);

        const data = convertToRaw(editorState.getCurrentContent());
       
    };


    return (

            <div>
                <h2 className='text-center text-3xl my-5'>Write your blog here</h2>
                <div className='mx-10'>
                    <TextField className='flex w-3/4 py-5 mx-5 my-3' id="standard-basic" label="Blog Title" variant="standard" name='title'  onChange={handleChange}/>
                    <div>
                        <FormControl sx={{ m: 1, minWidth: 390 }}>
                            <InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
                            <Select

                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={age}
                                name='category'
                                label="Age"
                                onChange={handleChange}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>

                        </FormControl>
                    </div>
                    <div className='my-10'>
                        <Editor
                            editorState={editorState}
                            onEditorStateChange={updateTextDescription}
                            toolbarClassName="toolbarClassName"
                            wrapperClassName=""
                            editorClassName="border-2 border-gray-500 px-5 py-10"


                        />
                    </div>

                    <Button className='bg-blue-700' variant="contained" component="label">
                        Upload Image
                        <input onChange={handleImage} hidden accept="image/*" multiple type="file" />
                    </Button>

                </div>
                <div className='flex items-center justify-center'>  
                     <Button className='bg-blue-700 my-10' variant="contained" component="label">POST BLOG</Button>
                </div>
             

            </div>
   
    )
}

export default WriteBlog