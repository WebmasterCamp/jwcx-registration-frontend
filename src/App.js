import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './pages/Home.js';
import Register from './pages/Register.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="main-container container">
          <div className="center top-logo-container">
            <img className="top-logo" src="/img/logo-sm.png" />
          </div>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
