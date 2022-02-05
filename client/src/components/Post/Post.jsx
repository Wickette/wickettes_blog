import React from "react";
import {Link } from 'react-router-dom'
import './post.css'

export default function Post({post}) {
    const origin = window.location.origin
    const PF = `https://wicketteblog-bucket.s3.ca-central-1.amazonaws.com/`
    return (
        <div className="post">
            {post.postPicture && (
                <img className="post_image" src={PF + post.postPicture} alt="" />
            )}
            <div className="post_info">
                <div className="post_categories">
                    {post.categories.map((c) => (
                        <span className="post_category">{c.name}</span>
                    ))}
                </div>
                <Link to={`/post/${post._id}`} className="link">
                <span className="post_title">{post.title}</span>
                </Link>
                <hr />
                <span className="post_date">{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className="post_description">{post.description}
            </p>
        </div>
    )
}