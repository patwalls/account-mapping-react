import React, { Component } from 'react';
import Account from './Account.js';
import { Table } from 'react-bootstrap';
import { PageHeader } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import './App.css';

class RawAccountList extends Component {
  render() {
    return (
      <div>
        <PageHeader>QuickBooks Accounts</PageHeader>
          <div className='raw-account title'>
            <div className='raw-account-name'>
              # - Account Name
            </div>
            <div className='summary-input'>
              Summary Account?
            </div>
          </div>
          <ListGroup>
            {
              Object.keys(this.props.accounts).map(function(account,idx) {
                return <Account
                          accountNumber={account}
                          accountName={this.props.accounts[account]}
                          key={idx}/>;
              }, this)
            }
          </ListGroup>
      </div>
    )
  }
}

export default RawAccountList;
