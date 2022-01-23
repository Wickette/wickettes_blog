import React from 'react';
import './settings.css'
import SideBar from '../../components/SideBar/SideBar'

export default function Settings() {
    return (
        <div className='settings'>
            <div className='settings_wrapper'>
                <div className='settings_title'>
                    <span className='settings_update_title'>Update Your Account Info</span>
                    <span className='settings_delete_title'>Delete Your Account </span>
                </div>
                <form action='' className='settings_form'>
                    <label>Profile Picture</label>
                    <div className='settings_profile_picture'>
                        <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp7775832.jpg&f=1&nofb=1' alt='' />
                        <label htmlFor='file_input'>
                            <i className='settings_icon fas fa-user'></i>
                        </label>
                        <input type='file' id='file_input' style={{display: 'none'}} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder='Wickette' />
                    <label>Email</label>
                    <input type="email" placeholder='Wickette@gmail.com' />
                    <label>Password</label>
                    <input type="password" />
                    <button className="settings_button">Update</button>
                </form>
            </div>
            <SideBar/>
        </div>
    )
}