import React, { Component } from 'react';
import Account from './Account.js';
import './App.css';

class RawAccountList extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Account Number</th>
            <th>Account Name</th>
            <th>Summary Account?</th>
          </tr>
        </thead>
          <tbody>
            {
              Object.keys(this.props.accounts).map(function(account,idx) {
                return <Account
                          accountNumber={account}
                          accountName={this.props.accounts[account]}
                          key={idx}/>;
              }, this)
            }
          </tbody>
      </table>
    )
  }
}

export default RawAccountList;
