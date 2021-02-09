import React, { useState, useEffect } from 'react';
import './Chats.css';
import { Avatar } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import ChatBubbleIcon from '@material-ui/icons/ChatBubble'
import { auth, db } from '../firebase';
import Chat from './Chat.js';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/appSlice';

export default function Chats() {
    const [posts, setPosts] = useState([]);
    const user = useSelector(selectUser);

    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot((snapshot) => setPosts(
            snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
                }))
            )
        );
    }, []);
    
    return(
        <div className='chats'>
            <div className='chats_header'>
                <Avatar src={user.profilePic} onClick={() => auth.signOut()} className='chats_avatar' />
                <div className='chats_search'>
                    <SearchIcon />
                    <input placeholder='Friends' type='text' />
                </div>
                <ChatBubbleIcon className='chats_chatIcon' />
            </div>
            <div className='chats_posts'>
                {posts.map(
                    ({
                        id, 
                        data: { profilePic, username, timestamp, imageUrl, read }, 
                    }) => (
                    <Chat
                        key={id}
                        id={id}
                        username={username}
                        timestamp={timestamp}
                        imageUrl={imageUrl}
                        read={read}
                        profilePic={profilePic}
                    />
                ))}
            </div>
        </div>
    )
}