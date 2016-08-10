import React, { Component } from 'react';
import './App.css';
import { ListGroupItem } from 'react-bootstrap';

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
      <ListGroupItem>
        <div className='raw-account'>
          <div className='raw-account-name'>
            {this.props.accountNumber} - {this.props.accountName}
          </div>
          <div className='summary-input'>
            <input
              type='checkbox'
              onChange={this.handleSummaryChange}
              checked={this.state.summary}/>
          </div>
        </div>
      </ListGroupItem>
    );
  }
}

export default Account;
