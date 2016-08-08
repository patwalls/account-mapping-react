import React, { Component } from 'react';
import './App.css';

class Plan extends Component {
  render() {
    return (
      <span>
      {this.props.plan}
      </span>
    )
  }
}

export default Plan;
