import React from "react";
import {Link} from 'react-router-dom'
import './post.css'

export default function Post({post}) {
    return (
        <div className="post">
            {post.photo && (
                <img className="post_image" src={post.photo} alt="" />
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