import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';
import Daco from '../../Daco_4047867.png'

export default function Login() {
    const signIn = () => {};
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