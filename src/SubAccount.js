import React, { Component } from 'react';
import './App.css';
import { ListGroupItem } from 'react-bootstrap';

class SubAccount extends Component {
  render() {
    return (
      <ListGroupItem bsStyle='warning'>
        {this.props.accountNum} - {this.props.accountName}
      </ListGroupItem>
    )
  }
}

export default SubAccount;
