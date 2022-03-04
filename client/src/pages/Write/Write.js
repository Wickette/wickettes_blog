import axios from 'axios';
import React, { useContext, useState } from 'react';
import './write.css';
import { Context } from '../../context/Context';

export default function Write() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [file, setFile] = useState('')
    const { user } = useContext(Context)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newPost = {
            username: user.username,
            title, 
            description,
        }
        if(file){
            const data = new FormData()
            const filename = Date.now() + file.name
            data.append('name', filename)
            data.append('file', file)
            newPost.postPicture = filename
            try {
               await axios.post('/upload', data)
            } catch (error) {
                console.log(error)
            }
        }
        try {
            const response = await axios.post('/posts', newPost)
            window.location.replace('/post/'+response.data._id)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='write'>
            {file && 
            <img 
                className='write_image' 
                src={URL.createObjectURL(file)} 
                alt="" 
                />
            }
            <form className='write_form' onSubmit={handleSubmit}>
                  <div className='write_form_group'>
                    <label htmlFor='file_input'>
                        <i className='write_icon far fa-plus-square'></i>
                    </label>
                    <input type='file' id='file_input' style={{display: 'none'}} onChange={e=>setFile(e.target.files[0])} />
                    <input type='text' placeholder='Title' className='write_input' onChange={e=>setTitle(e.target.value)}/>
                </div>
                <div className="write_form_group">
                    <textarea placeholder='Tell your story...' type='text' className='write_input write_text' onChange={e=>setDescription(e.target.value)}></textarea>
                </div>
                <button className='write_submit' type='submit'>Publish</button>
            </form>
        </div>
    )
}