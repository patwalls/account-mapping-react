import React, { Component } from 'react';
import Plan from './Plan.js';
import './App.css';

class PlansList extends Component {
  render() {
    return (
      <div className='plans'>
        {
          this.props.plans.map(function(plan,idx) {
            return <Plan
                    plan={plan}
                    currentPlan={this.props.currentPlan}
                    changeCurrentPlan={this.props.changeCurrentPlan}/>;
          }, this)
        }
      </div>
    )
  }
}

export default PlansList;
