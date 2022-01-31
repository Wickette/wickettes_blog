import React, { useState, useEffect } from "react";
import axios from "axios";
import './sidebar.css'
import { Link } from "react-router-dom";

export default function SideBar() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
      const getCategories = async () => {
          const response = await axios.get('/categories')
          setCategories(response.data)
      }
      getCategories()
    }, []);

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
                    {categories.map((c) => (
                        <Link to={`/?categories=${c.name}`} className="link">
                        <li className="sidebar_list_item" key={c._id}>{c.name}</li>
                        </Link>
                    ))}
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