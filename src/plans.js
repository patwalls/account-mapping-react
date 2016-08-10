import React, { Component } from 'react';
import PlanAccountList from './PlanAccountList.js';
import PlansList from './PlansList.js';
import AddPlanAccount from './AddPlanAccount.js';
import { PageHeader } from 'react-bootstrap';
import './App.css';

class Plans extends Component {
  render() {
    return (
      <div>
        <PageHeader>Plans</PageHeader>
        <PlansList
          plans={this.props.plans}
          currentPlan={this.props.currentPlan}
          changeCurrentPlan={this.props.changeCurrentPlan}/>
        <br/>
        <AddPlanAccount
          plans={this.props.plans}
          addPlanAccount={this.props.addPlanAccount}
          currentPlan={this.props.currentPlan}/>
        <PlanAccountList
          plans={this.props.plans}
          planAccounts={this.props.planAccounts}
          rawAccounts={this.props.rawAccounts}
          currentPlan={this.props.currentPlan}/>
      </div>
    );
  }
}

export default Plans;
