import React, { Component } from 'react';
import './App.css';
import Home from './pages/home'
import NavMenu from './components/navmenu'
import Dashboard from './pages/dashboard'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route path="/home" component={Home} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/hike/new" component={HikeForm} />
        </Router>
      </div>
    );
  }
}

export default App;
