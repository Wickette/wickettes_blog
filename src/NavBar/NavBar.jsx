import React from "react";
import './navbar.css'

export default function NavBar() {
    return (
        <div className="navbar">
            <div className="top_left">
            <i className="top_left_icon fab fa-facebook-square"></i>
            <i className="top_left_icon fab fa-twitter-square"></i>
            <i className="top_left_icon fab fa-pinterest-square"></i>
            <i className="top_left_icon fab fa-instagram-square"></i>
            </div>
            <div className="top_center">
                <ul className="top_center_list">
                    <li className="top_center_list_item">HOME</li>
                    <li className="top_center_list_item">ABOUT</li>
                    <li className="top_center_list_item">CONTACT</li>
                    <li className="top_center_list_item">WRITE</li>
                    <li className="top_center_list_item">LOGOUT</li>
                </ul>
            </div>
            <div className="top_right">
                <img className="top_right_image" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp7775832.jpg&f=1&nofb=1" alt="" />
                <i className="top_right_search_icon fas fa-search"></i>
            </div>
        </div>
    )
}