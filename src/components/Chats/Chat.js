import React from 'react';
import './Chat.css';
import { Avatar } from '@material-ui/core';
import StopRoundedIcon from '@material-ui/icons/StopRounded'

export default function Chat({ id, username, timestamp, read, imageUrl, profilePic}){
    return(
        <div className='chat'>
            <Avatar className='chat_avatar' src={profilePic}/>
            <div className='chat_info'>
                <h4>{username}</h4>
                <p>Tap to view - {new Date(timestamp?.toDate()).toUTCString()}</p>
            </div>

            {!read && <StopRoundedIcon className='chat_readIcon'/>}
        </div>
    )
}