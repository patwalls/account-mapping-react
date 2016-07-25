import React, { Component } from 'react';
import SubAccount from './SubAccount.js';
import './App.css';

class SubAccountList extends Component {
  render() {
    return (
      <ul>
        {
          Object.keys(this.props.rawAccounts).map(function(account,idx) {
            if (this.props.subAccounts.includes(account)) {
              return <SubAccount
                        key={idx}
                        accountName={this.props.rawAccounts[account]}
                        accountNum={account}/>;
            } else {
              return null
            }
          }, this)
        }
      </ul>
    )
  }
}

export default SubAccountList;
