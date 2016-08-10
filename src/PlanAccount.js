import React, { Component } from 'react';
import SubAccountList from './SubAccountList.js';
import './App.css';
import { Button } from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';

class PlanAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: false
    };
    this.handleExpand = this.handleExpand.bind(this)
  }
  handleExpand() {
    this.setState({expand: !this.state.expand})
  }
  render() {
    if (this.state.expand) {
      var subAccounts = <SubAccountList
        rawAccounts={this.props.rawAccounts}
        subAccounts={this.props.subAccounts}/>
    }

    return (
      <div>
        <ListGroupItem href="#" onClick={this.handleExpand} className='plan-account'>
          + {this.props.accountName}
        </ListGroupItem>
        {subAccounts}
      </div>
    );
  }
}

export default PlanAccount;
