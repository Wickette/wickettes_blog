import React, { useContext, useState } from 'react';
import './settings.css'
import { Context } from '../../context/Context';
import axios from 'axios';

export default function Settings() {

    const [file, setFile] = useState(null)
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [success, setSuccess] = useState(false)
    const { user, dispatch } = useContext(Context)
    const origin = window.location.origin
    const PF = `${origin}/images/`

    const handleUserUpdate = async (e) => {
        e.preventDefault()
        dispatch({type: 'UPDATE_START'})
        const updatedUser = {
            userId: user._id,
            username, 
            email,
            password
        }
        if(file){
            const data = new FormData()
            const filename = Date.now() + file.name
            data.append('name', filename)
            data.append('file', file)
            updatedUser.profilePicture = filename
            try {
               await  axios.post('/upload', data)
            } catch (error) {
                console.log(error)
            }
        }
        try {
           const response = await axios.put('/users/' + user._id, updatedUser)
            setSuccess(true)
            dispatch({type: 'UPDATE_SUCCESS', payload: response.data})
            return
        } catch (error) {
            console.log(error)
            dispatch({type: 'UPDATE_FAILURE'})
            return
        }
    }

    return (
        <div className='settings'>
            <div className='settings_wrapper'>
                <div className='settings_title'>
                    <span className='settings_update_title'>Update Your Account Info</span>
                    <span className='settings_delete_title'>Delete Your Account </span>
                </div>
                <form action='' className='settings_form' onSubmit={handleUserUpdate}>
                    <label>Profile Picture</label>
                    <div className='settings_profile_picture'>
                        <img src={file ? URL.createObjectURL(file) : PF + user.profilePicture} alt='' />
                        <label htmlFor='file_input'>
                            <i className='settings_icon fas fa-user'></i>
                        </label>
                        <input type='file' id='file_input' style={{display: 'none'}} onChange={e=>setFile(e.target.files[0])}/>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder={user.username} onChange={e=>setUsername(e.target.value)}/>
                    <label>Email</label>
                    <input type="email" placeholder={user.email} onChange={e=>setEmail(e.target.value)}/>
                    <label>Password</label>
                    <input type="password" onChange={e=>setPassword(e.target.value)}/>
                    <button className="settings_button" type='submit'>Update</button>
                    {success && <span style={{ color: 'green', textAlign: 'center', margin: '25px'}}>Profile updated successfully!</span>}
                </form>
            </div>
        </div>
    )
}