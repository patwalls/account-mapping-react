import React, { Component } from 'react';
import PlanAccount from './PlanAccount.js';
import './App.css';

class PlanAccountList extends Component {
  render() {
    return (
      <div>
          {
            Object.keys(this.props.planAccounts[this.props.plans[this.props.currentPlan]]).map(function(account,idx) {
              return <PlanAccount
                        accountName={account}
                        subAccounts={this.props.planAccounts[this.props.plans[this.props.currentPlan]][account]}
                        rawAccounts={this.props.rawAccounts}
                        key={idx}/>;
            }, this)
          }
      </div>
    )
  }
}

export default PlanAccountList;
