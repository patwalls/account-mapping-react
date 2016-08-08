import React, { Component } from 'react';
import RawAccountList from './RawAccountList.js';
import Plans from './plans.js';
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
        '006': ['Alcohol Costs'],
        '007': ['Personnel Costs'],
        '008': ['Taxes'],
        '009': ['Cleaning Costs']
      },
      planAccounts: {
        'Plan 1': {
          'Food': ['001','003'],
          'Alcohol': []
        },
        'Plan 2': {
          'Food & Bev': ['001','003'],
          'Taxes': []
        }
      },
      plans: ['Plan 1','Plan 2'],
      currentPlan: 'Plan 1'
    }
    this.addPlanAccount = this.addPlanAccount.bind(this);
    this.changeCurrentPlan = this.changeCurrentPlan.bind(this);
  }
  addPlanAccount(account, plan) {
    this.state.planAccounts[plan][account] = [];
    this.setState({ planAccounts: this.state.planAccounts });
  }
  changeCurrentPlan(plan) {
    this.setState({currentPlan: plan});
  }
  render() {
    return (
      <div className="App">
        <h2>Account Mapping Mockup</h2>
        <button>Import from Quickbooks</button>
        <div className='main-window'>
          <div className='left-side'>
            <RawAccountList accounts={this.state.accounts} />
          </div>
          <div className='right-side'>
            <AddPlanAccount
              addPlanAccount={this.addPlanAccount}
              currentPlan={this.state.currentPlan}/>
            <Plans
              planAccounts={this.state.planAccounts}
              rawAccounts={this.state.accounts}
              plans={this.state.plans}
              currentPlan={this.state.currentPlan}
              changeCurrentPlan={this.changeCurrentPlan}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
