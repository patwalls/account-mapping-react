import React, { Component } from 'react';
import PlanAccountList from './PlanAccountList.js';
import PlansList from './PlansList.js';
import './App.css';

class Plans extends Component {
  render() {
    return (
      <div>
        <PlansList
          plans={this.props.plans}
          currentPlan={this.props.currentPlan}
          changeCurrentPlan={this.props.changeCurrentPlan}/>
        <PlanAccountList
          planAccounts={this.props.planAccounts}
          rawAccounts={this.props.rawAccounts}
          currentPlan={this.props.currentPlan}/>
      </div>
    );
  }
}

export default Plans;
