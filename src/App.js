import React from 'react';
import './App.css';
import WebcamCapture from './components/Webcam/WebcamCapture';
import Preview from './components/Webcam/Preview';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Chats from './components/Chats/Chats';
import Chat from './components/Chats/Chat';

function App() {
  return (
    <div className="App">
      <Router>
        <div className='app_body'>
          <Switch>
            <Route exact path ='/'>
              <WebcamCapture />
            </Route>

            <Route exact path ='/preview'>
              <Preview />
            </Route>

            <Route exact path ='/chats'>
              <Chats />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
