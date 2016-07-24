import React, { Component } from 'react';
import AccountList from './AccountList.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Account Mapping Mockup</h2>
        <AccountList />
      </div>
    );
  }
}

export default App;
