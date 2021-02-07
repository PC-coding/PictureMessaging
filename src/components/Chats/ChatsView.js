import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { selectSelectedImage } from '../../features/appSlice';
// import './ChatsView.css';

export default function ChatsView() {
    const selectedImage = useSelector(selectSelectedImage);
    const history = useHistory();

    useEffect(() => {
        if (!selectedImage) {
            exit();
        }
    }, [selectedImage]);

    const exit = () => {
        history.replace('/chats')
    };
    
    return(
        <div className='chatsView'>
            <img src={selectedImage} alt="" onClick={exit} />
        </div>
    )
}