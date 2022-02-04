import React, { useContext } from "react";
import './navbar.css'
import { Link } from 'react-router-dom'
import { Context } from "../../context/Context";

export default function NavBar() {
    const {user, dispatch} = useContext(Context);
    const PF = 'https://localhost:5000/images/'

    const handleLogout = () => {
        dispatch({type: 'LOGOUT'})
    }
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
                    <li className="top_center_list_item">
                        <Link className='link' to='/'>HOME</Link>
                    </li>
                    <li className="top_center_list_item">
                        <Link className='link' to='/'>ABOUT</Link>
                    </li>
                    <li className="top_center_list_item">
                        <Link className='link' to='/'>CONTACT</Link>
                    </li>
                    <li className="top_center_list_item">
                        <Link className='link' to='/write'>WRITE</Link>
                    </li>
                    <li className="top_center_list_item" onClick={handleLogout}>
                        {user && 'LOGOUT'}
                    </li>
                </ul>
            </div>
            <div className="top_right">
                {
                    user ? (
                        <Link to='/settings'>
                            <img className="top_right_image" src={PF + user.profilePicture} alt="" />
                        </Link>
                    ) : (
                        <ul className="top_center_list">
                            <li className="top_center_list_item">
                                <Link className='link' to='/login'>LOGIN</Link>
                            </li>
                            <li className="top_center_list_item">
                                <Link className='link' to='/register'>REGISTER</Link>
                            </li>
                        </ul>
                    )
                }

                <i className="top_right_search_icon fas fa-search"></i>
            </div>
        </div>
    )
}