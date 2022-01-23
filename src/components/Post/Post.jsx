import React from "react";
import './post.css'

export default function Post() {
    return (
        <div className="post">
            <img className="post_image" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcache.desktopnexus.com%2Fthumbseg%2F2458%2F2458702-bigthumbnail.jpg&f=1&nofb=1" alt="" />
            <div className="post_info">
                <div className="post_categories">
                    <span className="post_category">Music</span>
                    <span className="post_category">Life</span>
                </div>
                <span className="post_title">Lorem ipsum dolor sit amet</span>
                <hr />
                <span className="post_date">1 hour ago</span>
            </div>
            <p className="post_description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti consequuntur qui dolor modi sed cupiditate quia, illo illum beatae ea neque quod saepe non enim hic praesentium explicabo? Ex, blanditiis.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti consequuntur qui dolor modi sed cupiditate quia, illo illum beatae ea neque quod saepe non enim hic praesentium explicabo? Ex, blanditiis.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti consequuntur qui dolor modi sed cupiditate quia, illo illum beatae ea neque quod saepe non enim hic praesentium explicabo? Ex, blanditiis.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti consequuntur qui dolor modi sed cupiditate quia, illo illum beatae ea neque quod saepe non enim hic praesentium explicabo? Ex, blanditiis.
            </p>
        </div>
    )
}