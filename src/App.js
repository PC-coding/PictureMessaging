import React, { useEffect } from 'react';
import './App.css';
import WebcamCapture from './components/Webcam/WebcamCapture';
import Preview from './components/Webcam/Preview';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Chats from './components/Chats/Chats';
import ChatsView from './components/Chats/ChatsView.js';
import { useDispatch, useSelector } from 'react-redux';
import Login from './components/Login/Login';
import { login, logout, selectUser } from './features/appSlice';
import { auth } from './components/firebase';
import Daco from './Daco_4047867.png'

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(login({
          username: authUser.displayName,
          profilePic: authUser.photoURL,
          id: authUser.uid,
        })
        );
      } else {
        dispatch(logout());
      }
    })
  }, [])
  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
          <img className='applogo' src={Daco} alt='' />
          <div className='app_body'>
            <div className='app_bodyBG'>
              <Switch>
                <Route exact path='/'>
                  <WebcamCapture />
                </Route>

                <Route exact path='/preview'>
                  <Preview />
                </Route>

                <Route exact path='/chats'>
                  <Chats />
                </Route>

                <Route exact path='/chats/view'>
                  <ChatsView />
                </Route>
              </Switch>
            </div>
          </div>
        </>
        )}
      </Router>
    </div>
  );
}

export default App;
