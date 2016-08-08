import React, { Component } from 'react';
import './App.css';

class SubAccount extends Component {
  render() {
    return (
      <span>
        {this.props.accountNum} - {this.props.accountName}
      </span>
    )
  }
}

export default SubAccount;
