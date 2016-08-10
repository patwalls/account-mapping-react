import React, { Component } from 'react';
import Plan from './Plan.js';
import { Tabs } from 'react-bootstrap';
import { Tab } from 'react-bootstrap';
import { Glyphicon } from 'react-bootstrap';
import './App.css';

class PlansList extends Component {
  constructor(props) {
    super(props);
    this.changePlan = this.changePlan.bind(this);
  }
  changePlan(key) {
    this.props.changeCurrentPlan(key);
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
      <Tabs activeKey={this.props.plan}
            onSelect={this.changePlan}
            id="controlled-tab-example">
        {
          this.props.plans.map(function(plan,idx) {
            return <Plan
                    plan={plan}
                    currentPlan={this.props.currentPlan}
                    changeCurrentPlan={this.props.changeCurrentPlan}
                    title={plan}
                    eventKey={idx}/>;
          }, this)
        }
        <Tab title='+'></Tab>
      </Tabs>
    )
  }
}

export default PlansList;
