import React, { Component } from 'react';
import SubAccountList from './SubAccountList.js';
import './App.css';

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
    } else {
      var subAccounts = null
    }

    return (
      <tr>
        <td>
          <button
            onClick={this.handleExpand}>
          +
          </button>
        </td>
        <td>{this.props.accountName}</td>
        <td className='plan-account'>
          {subAccounts}
        </td>
      </tr>
    );
  }
}

export default PlanAccount;
