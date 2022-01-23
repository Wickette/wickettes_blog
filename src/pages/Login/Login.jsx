import React from "react";
import { Link } from "react-router-dom";
import './login.css'

export default function Login() {
    return (
        <div className="login">
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>  
                    <form className="login_form">
                        <h3>Login</h3>
                            <label>Email</label>
                            <input type="text" className="login_input" placeholder="Enter your email..."/>
                            <label>Password:</label>
                            <input type="password" className="login_input" placeholder="Enter a password..."/>
                            <button className="login_button1">Login</button>
                    </form>
                    <button className="register_button1">
                        <Link className="link" to='/register'>Register</Link>
                    </button>
        </div>
    )
}