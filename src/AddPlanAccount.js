import React, { Component } from 'react';
import './App.css';

class AddPlanAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {input: ''}
    this.handleChange = this.handleChange.bind(this);
    this.handleAddPlanAccount = this.handleAddPlanAccount.bind(this);
  }
  handleChange(e) {
    e.preventDefault();
    this.setState({input: e.target.value});
  }
  handleAddPlanAccount() {
    this.props.addPlanAccount(this.state.input);
  }
  render() {
    console.log(this.state.input);
    return (
      <div>
        <input onChange={this.handleChange}/>
        <button onClick={this.handleAddPlanAccount}></button>
      </div>
    )
  }
}

export default AddPlanAccount;
