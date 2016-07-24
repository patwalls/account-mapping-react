import React, { Component } from 'react';
import Account from './Account.js';
import './App.css';

class AccountList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accounts: [
        ['001','Food Revenue'],
        ['002','Alcohol Revenue'],
        ['003','Pastry Revenue'],
        ['004','Food Costs'],
        ['005','Alchol Costs'],
        ['006','Personnel Costs'],
        ['007','Taxes'],
        ['008','Cleaning Costs']
      ]
    };
  }
  render() {
    return (
      <table>
        <tr>
          <th>Account Number</th>
          <th>Account Name</th>
          <th>Summary Account?</th>
        </tr>
        {
          this.state.accounts.map(function(account,idx) {
            return <Account account={account} key={idx}/>;
          }, this)
        }
      </table>
    )
  }
}

export default AccountList;
