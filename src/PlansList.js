import React, { Component } from 'react';
import Plan from './Plan.js';
import './App.css';

class PlansList extends Component {
  render() {
    console.log(this.props.plans)
    return (
      <ul>
      {
        this.props.plans.map(function(plan,idx) {
          return <li>
                    <Plan plan={plan}/>
                  </li>;
        }, this)
      }
      </ul>
    )
  }
}

export default PlansList;
