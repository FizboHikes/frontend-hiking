import React, { Component } from 'react';
import '../App.css';
import { Redirect, Link } from 'react-router-dom';
import AuthService from '../services';


//Login to be renamed
class Login extends Component {
  constructor(props) {
  super(props)
    this.auth = new AuthService()
    this.state = {
      loginSuccess: false,
      errors: "",
      form: {
        user: {
          email: "test@example.com",
          password: "123134"
        }
      }
    }
  }

  render() {
    let {email, password} = this.state.form.user
    return(
    <main>
      <form onSubmit={this.onSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={this.onChange}
          // placeholder={email}
        />
        {this.state.errors.email && <div>Error: Email  {this.state.errors.email[0]}</div>}

        <input
          type="password"
          name="password"
          value={password}
          onChange={this.onChange}
          // placeholder={password}
        />
        {this.state.errors.password && <div>Error: Password  {this.state.errors.password[0]}</div>}
        <button>Login</button>
      </form>
      	{this.state.loginSuccess && <Redirect to="/dashboard" />}
    </main>
    )
  }

  onChange = (e) => {
    let { form } = this.state
    form.user[e.target.name] = e.target.value
    this.setState({ form })
  }

  onSubmit = (e) => {
    e.preventDefault()

    // this.props.getUser(this.state.form.user.email)
    console.log("Starting Login");
    this.auth.login(this.state.form)
    .then(json => {
      console.log("Got to second then:", json)
      if(json.errors) {
        console.log("!! ERRORS !! ", json.errors);
        this.setState({
          errors: json.errors
        })
      } else {
        console.log("preparing to redirect")
        this.setState({
          loginSuccess: true
        })
        // this.props.getUser(this.state.form.user.email)
      }
    })
  }
}


export default Login;
