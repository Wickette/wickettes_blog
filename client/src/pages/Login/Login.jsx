import axios from "axios";
import React, {useRef, useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import './login.css'

export default function Login() {
    const usernameRef = useRef()
    const passwordRef = useRef()
    const { dispatch, isFetching } = useContext(Context)

    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch({type: 'LOGIN_START'})
        try {
            const response = await axios.post('/auth/login', {
                username: usernameRef.current.value,
                password: passwordRef.current.value
            })
            dispatch({ type: 'LOGIN_SUCCESS', payload: response.data })
            return
        } catch (error) {
            dispatch({ type: 'LOGIN_FAILURE' })
            return
        }
    }

    return (
        <div className="login">
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>  
                    <form className="login_form" onSubmit={handleSubmit}>
                        <h3>Login</h3>
                            <label>Username</label>
                            <input type="text" className="login_input" placeholder="Enter your username..." ref={usernameRef}/>
                            <label>Password:</label>
                            <input type="password" className="login_input" placeholder="Enter a password..." ref={passwordRef}/>
                            <button className="login_button1" type="submit" disabled={isFetching}>Login</button>
                    </form>
                    <button className="register_button1">
                        <Link className="link" to='/register'>Register</Link>
                    </button>
        </div>
    )
}