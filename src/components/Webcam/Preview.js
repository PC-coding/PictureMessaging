import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { resetCameraImage, selectCameraImage } from '../../features/cameraSlice';
import CloseIcon from '@material-ui/icons/Close';
import './Preview.css';

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

    return(
        <div className='preview'>
            <CloseIcon onClick={closePreview} className='preview_close' />
            <img src={cameraImage}/>
        </div>
    )
}