import React, { Component } from 'react';
import './App.css';
import { Tab } from 'react-bootstrap';

class Plan extends Component {
  render() {
    return (
      <Tab eventKey={this.props.key} title={this.props.title}>
        {this.props.plan}
      </Tab>
    )
  }
}

export default Plan;
