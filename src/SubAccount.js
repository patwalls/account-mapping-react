import React, { Component } from 'react';
import './App.css';

class SubAccount extends Component {
  render() {
    return (
      <li>
        {this.props.accountNum} - {this.props.accountName}
      </li>
    )
  }
}

export default SubAccount;
