import React from 'react';
import './App.css';
import WebcamCapture from './components/Webcam/WebcamCapture';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Router>
        <div className='app_body'>
          <Switch>
            <Route exact path ='/test'>
              <h1> hello</h1>
            </Route>

            <Route exact path ='/'>
              <WebcamCapture />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
