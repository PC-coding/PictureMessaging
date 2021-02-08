import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';

export default function Login() {
    const signIn = () => {};
    return(
        <div className='login'>
            <img src='' alt='' />
            <Button variant='outline' onClick={signIn}>
                Sign-In
            </Button>
        </div>
    )
}