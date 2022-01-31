import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import './register.css'

export default function Register() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            setError(false)
            const response = await axios.post('/auth/register', {
                username,
                email,
                password
            })
            response.data && window.location.replace('/')
        } catch (error) {
            setError(true)
        }
    }

    return (
        <div className="register">
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>  
                    <form className="register_form" onSubmit={handleSubmit}>
                        <h3>Register</h3>
                            <label className="label_title">Username</label>
                            <input type="text" className="register_input" placeholder="Enter your username..."
                            onChange={e => setUsername(e.target.value)}
                            />
                            <label className="label_title">Email</label>
                            <input type="text" className="register_input" placeholder="Enter your email..."
                            onChange={e => setEmail(e.target.value)}
                            />
                            <label className="label_title">Password:</label>
                            <input type="password" className="register_input" placeholder="Enter a password..."
                            onChange={e => setPassword(e.target.value)}
                            />
                            <button className="register_button" type="submit">Register</button>
                            {error && <span className="error_text">Something went wrong!</span>}
                    </form>
                    <button className="login_button">
                        <Link className="link" to='/login'>Login</Link>
                    </button>
                    
        </div>
    )
}