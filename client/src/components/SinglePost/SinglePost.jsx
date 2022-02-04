import React, { useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios'
import './singlepost.css'
import { useLocation } from "react-router";
import { Context } from "../../context/Context";


export default function SinglePost() {
    const location = useLocation()
    const path = location.pathname.split('/')[2]
    const [post, setPost] = useState([])
    const PF = 'https://localhost:5000/images/'
    const { user } = useContext(Context)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [updateMode, setUpdateMode] = useState(false)
    
    useEffect(() => {
        const getPost = async () => {
            const response = await axios.get('/posts/' + path)
            setPost(response.data)
            setTitle(response.data.title)
            setDescription(response.data.description)
        }
        getPost()
    }, [path]);

    const handleDelete = async () => {
        try {
            await axios.delete('/posts/' + path,  {data:{username: user.username}})
            window.location.replace('/')
        } catch (error) {
            
        }
    }

    const handleUpdate = async () => {
        try {
            await axios.put('/posts/' + path,  {username: user.username, title: title, description: description })
            setUpdateMode(false)
        } catch (error) {
            
        }
    }

    return (
        <div className="singlepost">
            <div className="single_post_wrapper">
                {post.postPicture && (
                    <img className="single_post_image" src={PF + post.postPicture} alt="" />
                )
                }{
                    updateMode ? <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} className="single_post_title_input" autoFocus/> : (
                        <h1 className="single_post_title">
                            {title}
                            {post.username === user?.username && (
                                <div className="single_post_edit">
                                <i className=" single_post_icon fas fa-edit" onClick={()=>setUpdateMode(true)}></i>
                                <i className="single_post_icon fas fa-trash-alt" onClick={handleDelete}></i>
                            </div>
                            )}
                        </h1>
                    )
                }
                <div className="single_post_info">
                    <span className="single_post_author">
                    Author: 
                        <Link to={`/?user=${post.username}`} className="link">
                            <strong> {post.username}</strong>
                        </Link>
                    </span>
                    <span className="single_post_date">{new Date(post.updatedAt).toDateString()}</span>
                </div>
                {updateMode ? <textarea type='text' value={description} onChange={(e) => setDescription(e.target.value)} className="single_post_description_input"/> : (
                    <p className="single_post_description">
                        {description}
                    </p>
                )}
                {updateMode && (
                    <button className="single_post_update_button" onClick={handleUpdate}>Update</button>
                )}
            </div>
        </div>
    )
}