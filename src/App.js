import React, { Component } from 'react';
import RawAccountList from './RawAccountList.js';
import Plans from './plans.js';
import './App.css';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accounts: {},
      planAccounts: {
        'Plan 1': {
          'Food': ['001','003'],
          'Alcohol': []
        },
        'Plan 2': {
          'Food & Bev': ['001','003'],
          'Taxes': []
        }
      },
      plans: ['Plan 1','Plan 2'],
      currentPlan: 0
    }
    this.addPlanAccount = this.addPlanAccount.bind(this);
    this.changeCurrentPlan = this.changeCurrentPlan.bind(this);
    this.populateAccounts = this.populateAccounts.bind(this);
  }
  populateAccounts() {
    var accounts = {
      '001': ['Food Revenue'],
      '002': ['Alcohol Revenue'],
      '003': ['Pastry Revenue'],
      '004': ['Total Revenue'],
      '005': ['Food Costs'],
      '006': ['Alcohol Costs'],
      '007': ['Personnel Costs'],
      '008': ['Taxes'],
      '009': ['Cleaning Costs']
    }
    this.setState({ accounts: accounts });
  }
  addPlanAccount(account, planIdx) {
    this.state.planAccounts[this.state.plans[planIdx]][account] = [];
    this.setState({ planAccounts: this.state.planAccounts });
  }
  changeCurrentPlan(planIdx) {
    this.setState({currentPlan: planIdx});
  }
  render() {
    return (
      <div className="App">
        <Jumbotron>
          <h1>Account Mapping in React</h1>
          <p>This is an example of how we can map Quickbooks data to planning accounts in multiple different plans.</p>
          <p><Button onClick={this.populateAccounts} bsStyle="primary">Import Quickbooks Data</Button></p>
        </Jumbotron>
        <Row className="show-grid">
          <Grid className='main-window'>
            <Col md={5}>
              <RawAccountList accounts={this.state.accounts} />
            </Col>
            <Col md={5}>
              <Plans
                addPlanAccount={this.addPlanAccount}
                planAccounts={this.state.planAccounts}
                rawAccounts={this.state.accounts}
                plans={this.state.plans}
                currentPlan={this.state.currentPlan}
                changeCurrentPlan={this.changeCurrentPlan}/>
            </Col>
          </Grid>
        </Row>
      </div>
    );
  }
}

export default App;
