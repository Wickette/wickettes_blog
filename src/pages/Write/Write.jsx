import React from 'react';
import './write.css';

export default function Write() {
    return (
        <div className='write'>
            <img className='write_image' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcache.desktopnexus.com%2Fthumbseg%2F2458%2F2458702-bigthumbnail.jpg&f=1&nofb=1' alt="" />
            <form className='write_form'>
                <div className='write_form_group'>
                    <label htmlFor='file_input'>
                        <i className='write_icon far fa-plus-square'></i>
                    </label>
                    <input type='file' id='file_input' style={{display: 'none'}} />
                    <input type='text' placeholder='Title' className='write_input'/>
                </div>
                <div className="write_form_group">
                    <textarea placeholder='Tell your story...' type='text' className='write_input write_text'></textarea>
                </div>
                <button className='write_submit'>Publish</button>
            </form>
        </div>
    )
}