import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div class="App">
        <div class="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Preact</h2>
        </div>
      </div>
    );
  }
}

export default App;
