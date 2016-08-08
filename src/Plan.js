import React, { Component } from 'react';
import './App.css';

class Plan extends Component {
  constructor(props) {
    super(props);
    this.changePlan = this.changePlan.bind(this);
  }
  changePlan() {
    this.props.changeCurrentPlan(this.props.plan);
  }
  isCurrentPlan() {
    if (this.props.currentPlan == this.props.plan) {
      return 'plan current';
    } else {
      return 'plan';
    }
  }
  render() {
    return (
      <span className={this.isCurrentPlan()} onClick={this.changePlan}>
      {this.props.plan}
      </span>
    )
  }
}

export default Plan;
