import React, { Component } from 'react';
import SubAccount from './SubAccount.js';
import './App.css';

class SubAccountList extends Component {
  render() {
    return (
      <ul>
        {
          Object.keys(this.props.rawAccounts).map(function(account) {
            if (this.props.subAccounts.includes(account)) {
              return <SubAccount accountNum={account}/>
            }
          }, this)
        }
      </ul>
    )
  }
}

export default SubAccountList;
