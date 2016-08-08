import React, { Component } from 'react';
import PlanAccount from './PlanAccount.js';
import './App.css';

class PlanAccountList extends Component {

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>+</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {
            Object.keys(this.props.planAccounts[this.props.currentPlan]).map(function(account,idx) {
              return <PlanAccount
                        accountName={account}
                        subAccounts={this.props.planAccounts[this.props.currentPlan][account]}
                        rawAccounts={this.props.rawAccounts}
                        key={idx}/>;
            }, this)
          }
        </tbody>
      </table>
    )
  }
}

export default PlanAccountList;
