import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { resetCameraImage, selectCameraImage } from '../../features/cameraSlice';
import './Preview.css';
import CloseIcon from '@material-ui/icons/Close';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import CreateIcon from '@material-ui/icons/Create';
import NoteIcon from '@material-ui/icons/Note';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import CropIcon from '@material-ui/icons/Crop';
import TimerIcon from '@material-ui/icons/Timer';
import SendIcon from '@material-ui/icons/Send';
import { v4 as uuid } from 'uuid';
import firebase from 'firebase';
import { db, storage } from '../firebase';

export default function Preview(){
    const cameraImage = useSelector(selectCameraImage);
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!cameraImage) {
            history.replace('/')
        }
    }, [cameraImage, history])

    const closePreview = () => {
        dispatch(resetCameraImage());
    }

    const sendPost = () => {
        const id = uuid();
        const uploadTask = storage
                            .ref(`post/${id}`)
                            .putString(cameraImage, 'data_url');
        uploadTask.on('state_changed', 
            null, 
            (error) => {
                console.log(error);
            },
            () => {
                storage.ref('posts')
                .child(id)
                .getDownloadURL()
                .then((url) => {
                    db.collection('posts').add({
                        imageURl: url,
                        username: 'Partap',
                        read: false,
                        //ProfilePic,
                        timestamp: firebase.firestore.FieldValue.serverTimeStamp(),
                    });
                    history.replace('/chats');
                });
            }
        );
    };

    return(
        <div className='preview'>
            <CloseIcon onClick={closePreview} className='preview_close' />
            <div className='preview_toolbarRight'>
                <TextFieldsIcon />
                <CreateIcon />
                <NoteIcon />
                <MusicNoteIcon />
                <AttachFileIcon />
                <CropIcon />
                <TimerIcon />
            </div>
            <img src={cameraImage}/>
            <div className='preview_footer'>
                <p>Send Now</p>
                <SendIcon onClick={sendPost} fontSize='small' className='preview_sendIcon' />
            </div>
        </div>
    )
}