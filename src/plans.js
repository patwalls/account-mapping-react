import React, { Component } from 'react';
import PlanAccountList from './PlanAccountList.js';
import PlansList from './PlansList.js';
import './App.css';

class Plans extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plans: ['Plan 1','Plan 2'],
      currentPlan: 'Plan 1'
    }
    this.changeCurrentPlan = this.changeCurrentPlan.bind(this);
  }
  changeCurrentPlan(plan) {
    this.setState({currentPlan: plan})
  }
  render() {
    return (
      <div>
        <PlansList
          plans={this.state.plans}
          changeCurrentPlan={this.changeCurrentPlan}/>
        <PlanAccountList
          planAccounts={this.props.planAccounts}
          rawAccounts={this.props.rawAccounts}
          currentPlan={this.state.currentPlan}/>
      </div>
    );
  }
}

export default Plans;
