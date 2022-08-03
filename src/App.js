import React from 'react';
import './App.scss';
import Home from './pages/Home';
import logo from './assests/logo.png';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="header">
          <h1>
            <img src={logo} alt="" />
            Eden
          </h1>
        </div>
        <Home />
      </div>
    </div>
  );
}

export default App;
