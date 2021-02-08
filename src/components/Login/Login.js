import React from 'react';
import { Button } from '@material-ui/core';
import './Login.css';
import Daco from '../../Daco_4047867.png'
import { useDispatch } from 'react-redux';
import { auth, provider } from '../firebase';
import { login } from '../../features/appSlice';

export default function Login({ user }) {
    const dispatch = useDispatch();

    const signIn = () => {
        auth.signInWithPopup(provider).then((result) => {
            console.log(user);
            dispatch(
                login({
                    username: result.user.displayName,
                    profilePic: result.user.photoURL,
                    id: result.user.uid,
                })
            );
        }).catch(error => alert(error.message));
    };
    return(
        <div className='login'>
            <div className='loginContainer'>
                <img src={Daco} alt='' />
                <Button variant='outlined' onClick={signIn}>
                    Sign-In
                </Button>
            </div>
        </div>
    )
}