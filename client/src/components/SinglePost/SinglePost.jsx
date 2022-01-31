import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios'
import './singlepost.css'
import { useLocation } from "react-router";


export default function SinglePost() {
    const location = useLocation()
    const path = location.pathname.split('/')[2]
    const [post, setPost] = useState([])

    useEffect(() => {
        const getPost = async () => {
            const response = await axios.get('/posts/' + path)
            setPost(response.data)
        }
        getPost()
    }, [path]);
    return (
        <div className="singlepost">
            <div className="single_post_wrapper">
                {post.photo && 
                    <img className="single_post_image" src={post.photo} alt="" />
                }
                <h1 className="single_post_title">
                    {post.title}
                    <div className="single_post_edit">
                        <i className=" single_post_icon fas fa-edit"></i>
                        <i className="single_post_icon fas fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="single_post_info">
                    <span className="single_post_author">
                    Author: 
                        <Link to={`/?user=${post.username}`} className="link">
                            <strong> {post.username}</strong>
                        </Link>
                    </span>
                    <span className="single_post_date">{new Date(post.updatedAt).toDateString()}</span>
                </div>
                <p className="single_post_description">
                    
                </p>
            </div>
        </div>
    )
}