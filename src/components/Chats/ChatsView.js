import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { selectSelectedImage } from '../../features/appSlice';
import './ChatsView.css';

export default function ChatsView() {
    const selectedImage = useSelector(selectSelectedImage);
    const history = useHistory();

    return(
        <div className='chatsView'>
            <img src={selectedImage} onClick={exit} alt='' />
        </div>
    )
}