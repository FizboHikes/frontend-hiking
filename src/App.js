import React, { Component } from 'react';
import './App.css';
import Home from './pages/home'
import NavMenu from './components/navmenu'
import Dashboard from './pages/dashboard'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import AuthService from './services/index.js'
import HikeCard from './components/hikeCard.js'


class App extends Component {
  constructor(props){
    super(props)
    this.auth = new AuthService
    this.state={
      authenticated: this.auth.loggedIn(),
      user: ""
    }
  }
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/dashboard" component={Dashboard} />
            <Redirect from="/login" to="/dashboard" />
          </Switch>
        </Router>
      </div>
    );
  }

}


export default App;
