import React, { Component } from 'react';
import RawAccountList from './RawAccountList.js';
import PlanAccountList from './PlanAccountList.js';
import AddPlanAccount from './AddPlanAccount.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accounts: {
        '001': ['Food Revenue'],
        '002': ['Alcohol Revenue'],
        '003': ['Pastry Revenue'],
        '004': ['Total Revenue'],
        '005': ['Food Costs'],
        '006': ['Alchol Costs'],
        '007': ['Personnel Costs'],
        '008': ['Taxes'],
        '009': ['Cleaning Costs']
      },
      planAccounts: {
        'Food':['001','003'],
        'Alcohol':[]
      }
    }
    this.addPlanAccount = this.addPlanAccount.bind(this)
  }
  addPlanAccount(account) {
    this.state.planAccounts[account] = [];
    this.setState({ planAccounts: this.state.planAccounts });
  }
  render() {
    return (
      <div className="App">
        <h2>Account Mapping Mockup</h2>
        <button>Import from Quickbooks</button>
        <div className='main-window'>
          <RawAccountList accounts={this.state.accounts} />
          <AddPlanAccount
            addPlanAccount={this.addPlanAccount}/>
          <PlanAccountList
            planAccounts={this.state.planAccounts}
            rawAccounts={this.state.accounts}/>
        </div>
      </div>
    );
  }
}

export default App;
