import React, { Component } from 'react';
import './App.css';
import { FormGroup } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

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
    this.props.addPlanAccount(this.state.input, this.props.currentPlan);
    this.setState({input: ''});
  }
  render() {
    return (
      <div>
        <FormGroup>
          <InputGroup>
            <FormControl type="text" onChange={this.handleChange} value={this.state.input} />
            <InputGroup.Button>
              <Button onClick={this.handleAddPlanAccount}>Add</Button>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>
      </div>
    )
  }
}

export default AddPlanAccount;
