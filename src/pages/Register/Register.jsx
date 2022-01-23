import React from "react";
import { Link } from "react-router-dom";
import './register.css'

export default function Register() {
    return (
        <div className="register">
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>  
                    <form className="register_form">
                        <h3>Register</h3>
                            <label>Username</label>
                            <input type="text" className="register_input" placeholder="Enter your username..."/>
                            <label>Email</label>
                            <input type="text" className="register_input" placeholder="Enter your email..."/>
                            <label>Password:</label>
                            <input type="password" className="register_input" placeholder="Enter a password..."/>
                            <button className="register_button">Register</button>
                    </form>
                    <button className="login_button">
                        <Link className="link" to='/login'>Login</Link>
                    </button>
        </div>
    )
}