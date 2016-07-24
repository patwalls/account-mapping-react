import React, { Component } from 'react';
import './App.css';

class AccountList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accounts: ['Account 1', 'Account 2', 'Account 3']
    };
  }
  render() {
    return (
      <div> {this.state.accounts} </div>
    );
  }
}

export default AccountList;
