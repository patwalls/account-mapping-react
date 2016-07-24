import React, { Component } from 'react';
import './App.css';

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      summary: false
    };
    this.handleSummaryChange = this.handleSummaryChange.bind(this)
  }
  handleSummaryChange() {
    this.setState({summary: !this.state.summary})
  }
  render() {
    return (
      <tr>
        <td>{this.props.account[0]}</td>
        <td>{this.props.account[1]}</td>
        <td><input
          type='checkbox'
          onChange={this.handleSummaryChange}
          checked={this.state.summary}/>
        </td>
      </tr>
    );
  }
}

export default Account;
