import React, { Component } from 'react';
import './App.css';
import Home from './pages/home'
import NavMenu from './components/navmenu'
import Dashboard from './pages/dashboard'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import AuthService from './services/index.js'
import HikeCard from './components/hikeCard.js'
import Profile from './pages/profileView'
import NewHike from './pages/newHike'

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
        <div>
        {(this.auth.loggedIn())
          // if logged in
          ? <Switch>
              <Redirect path="/home" to="/dashboard"/>
              <Route path="/home" component={Home} />
              <Route path="/dashboard" component={Dashboard} />
              <Route page="/profile" component={Profile} />
              <Route path="/hikes/new" component={NewHike} />
            </Switch>

            // If NOT LOGGED IN (IE GUEST USER)
          : <Switch>
            <Route path="/home" render={(routeProps) => (
              <Home refresh={this.refresh}{...routeProps} />)} />
            <Redirect path="/dashboard" to="/home"/>
            <Redirect path="/profile" to="/home"/>
            <Route exact path="/profile" redirect={Profile} />
            </Switch>}

        </div>
      </Router>
    </div>
    );
  }


  getUser = (user) => {
    console.log(user)
    this.setState({user})
  }

  refresh = () => {
  this.setState ({
    authenticated: this.auth.loggedIn()
  })
}


}


export default App;
