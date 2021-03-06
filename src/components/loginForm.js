import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import AuthService from '../services';
import '../assets/home.css'

//Login to be renamed
class LoginForm extends Component {
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
      <form className="loginForm" onSubmit={this.onSubmit}>
        <input
          className="logForm"
          type="email"
          name="email"
          value={email}
          onChange={this.onChange}
          // placeholder={email}
        />
        {this.state.errors.email && <div>Error: Email  {this.state.errors.email[0]}</div>}

        <input
          className="logForm"
          type="password"
          name="password"
          value={password}
          onChange={this.onChange}
          // placeholder={password}
        />
        {this.state.errors.password && <div>Error: Password  {this.state.errors.password[0]}</div>}
        <button className="logButton" style={{backgroundColor: "rgb(230, 160, 0)"}}>Login</button>
      </form>

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
    // console.log("Starting Login");
    this.auth.login(this.state.form)
    .then(json => {
      // console.log("Got to second then:", json)
      if(json.errors) {
        console.log("!! ERRORS !! ", json.errors);
        this.setState({
          errors: json.errors
        })
      } else {
        this.props.setUser(json)
        this.setState({
          loginSuccess: true
        })
      }
    })
    .catch( error => alert("error"))
  }
}


export default LoginForm;
