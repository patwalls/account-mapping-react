import React, { Component } from 'react';
import SubAccount from './SubAccount.js';
import './App.css';
import { Panel } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';

class SubAccountList extends Component {
  render() {
    return (
      <div>

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

      </div>
    )
  }
}

export default SubAccountList;
