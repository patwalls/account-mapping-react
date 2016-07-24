import React, { Component } from 'react';
import './App.css';

class SubAccount extends Component {
  render() {
    return (
      <div>{this.props.accountNum}</div>
    )
  }
}

export default SubAccount;
