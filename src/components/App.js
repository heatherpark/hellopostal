import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { Form } from './index';
import { Confirmation } from './index';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="app-chrome">
            <div className="logo-header">
              <h1 className="app-logo">hellopostal</h1>
            </div>
            <Route exact path="/" component={Form} />
            <Route exact path="/confirmation" component={Confirmation} />
          </div>
        </div>
      </Router>
    );
  }
}
