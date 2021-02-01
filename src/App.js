import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
      <h1>PicMsg</h1>
      <h2>Snapchat clone</h2>
      </header>
    </div>
  );
}

export default App;
