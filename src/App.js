import React from 'react';
import './App.css';
import WebcamCapture from './components/Webcam/WebcamCapture';
import Preview from './components/Webcam/Preview';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Chats from './components/Chats/Chats';
import ChatsView from './components/Chats/ChatsView.js';

function App() {
  return (
    <div className="App">
      <Router>
        <div className='app_body'>
          <Switch>
            <Route exact path='/'>
              <WebcamCapture />
            </Route>

            <Route path='/preview'>
              <Preview />
            </Route>

            <Route path='/chats'>
              <Chats />
            </Route>

            <Route exact path='/chats/view'>
              <ChatsView />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
