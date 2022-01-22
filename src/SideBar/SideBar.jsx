import React from "react";
import './sidebar.css'

export default function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebar_item">
                <span className="sidebar_title">ABOUT ME</span>
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F68.media.tumblr.com%2F2b2f6530102a5765a24fc530526aae3f%2Ftumblr_omf6ybvMBN1w4oiizo1_400.gif&f=1&nofb=1" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia minima minus cupiditate ab laboriosam quidem perspiciatis voluptatibus! Mollitia corrupti, accusamus unde numquam delectus quia nobis sint, quisquam quae facere quis.</p>
            </div>
            <div className="sidebar_item">
                <span className="sidebar_title">CATEGORIES</span>
                <ul className="sidebar_list">
                    <li className="sidebar_list_item">Life</li>
                    <li className="sidebar_list_item">Music</li>
                    <li className="sidebar_list_item">Style</li>
                    <li className="sidebar_list_item">Sport</li>
                    <li className="sidebar_list_item">Tech</li>
                    <li className="sidebar_list_item">Cinema</li>
                </ul>
            </div>
            <div className="sidebar_item">
                <span className="sidebar_title">FOLLOW US</span>
                <div className="sidebar_socials">
                    <i className="sidebar_icon fab fa-facebook-square"></i>
                    <i className="sidebar_icon fab fa-twitter-square"></i>
                    <i className="sidebar_icon fab fa-pinterest-square"></i>
                    <i className="sidebar_icon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    )
}