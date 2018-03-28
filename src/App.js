import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './pages/home';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container main-container">
          <div className="center top-logo-container">
            <img className="top-logo" src="/img/logo-sm.png" />
          </div>
          <div className="content">
            <Route exact path="/" component={Home} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
