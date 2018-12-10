import React, { Component } from 'react';
import './App.css';
import Home from './pages/home'
import NavMenu from './components/navmenu'
import Dashboard from './pages/dashboard'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import AuthService from './services/index.js'
import HikeCard from './components/hikeCard.js'
import NewHike from './pages/newHike'
import ShowHike from './pages/showHike'

class App extends Component {
  constructor(props){
    super(props)
    this.auth = new AuthService()
    this.state={
      authenticated: this.auth.loggedIn(),
      user: {}
    }
  }

  render() {
    console.log("I'm being rerendered and my state is", this.state.user)
    return (
    <div>
    {(this.auth.loggedIn()) && <NavMenu user={this.state.user}/>}
    {/*We dont need to send setUser to the NavMenu*/}
      <Router>
        <div>
        {(this.auth.loggedIn())
          // if logged in
          ? <Switch>
              <Redirect path="/home" to="/dashboard"/>
              <Route path="/home" component={Home} />
              <Route path="/dashboard" component={Dashboard}/>
              <Route path="/hikes/new" component={NewHike} />
              <Route path="/hikes/:id" component={ShowHike} />
            </Switch>

            // If NOT LOGGED IN (IE GUEST USER)
          : <Switch>
            <Route path="/home" render={(routeProps) => (
              <Home setUser={this.setUser}{...routeProps} />)} />
            <Redirect path="/dashboard" to="/home"/>
            </Switch>}

        </div>
      </Router>
    </div>
    );
  }

  refresh = () => {
    this.setState({
      authenticated: this.auth.loggedIn()
    })
  }

  setUser = (user) => {
    console.log(user)
    this.setState({user})
  }
}


export default App;
