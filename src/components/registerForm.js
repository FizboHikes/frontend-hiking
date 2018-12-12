import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { Alert, Grid, Col, Row, Button} from 'react-bootstrap'
import AuthService from '../services'
import '../assets/home.css'
class RegisterForm extends Component {
	constructor(props) {
		super(props)

		this.auth = new AuthService()
		this.state = {
			registerSuccess: false,
			errors: "",
			form: {
				user: {
					email: "test@example.com",
					password: "123134",
				}
			}
		}
	}

	render() {
		let { email, password } = this.state.form.user
		console.log(this.auth.loggedIn())
		return (
		<div className="registerPage">
			<form onSubmit={this.onSubmit}>
					<div className="missionStatement">
					ShareHike’s mission is to connect with your friends and family through your personal hiking adventure.

					<img src="https://cdn4.iconfinder.com/data/icons/health-bold-line-2/48/75-512.png" style={{width: 20}} /> Share your private hikes with your close friends.
					- Share experiences through tips and photos.
					- Find new trails and expand your private collection.
					</div>

				<div className="registerForm">
					<div className="innerRegister">
						<h2>Welcome!</h2>
						<h2>Register here.</h2>
						<input
							type="email"
							name="email"
							value={email}
							onChange={this.onChange}
						/>
						{this.state.errors.email && <div>Error: Email  {this.state.errors.email[0]}</div>}
						<input
							type="password"
							name="password"
							value={password}
							onChange={this.onChange}
						/>
						{this.state.errors.password && <div>Error: Password  {this.state.errors.password[0]}</div>}
						<button className="btn btn-primary">
							Register
						</button>
					</div>
				</div>
			</form>
		</div>

		)
	}

	onChange = (e) => {
		let { form } = this.state
		form.user[e.target.name] = e.target.value
		this.setState({ form })
	}

	onSubmit = (e) => {
		e.preventDefault()
		// console.log(this.auth);
		// console.log("the registration form is: " +this.state.form)
		// console.log(this.state.form)

		this.auth.register(this.state.form)
		.then(json => {
			console.log("Got to second then:", json)
			this.props.setUser(json)
			//this is what changed state possible.
			if(json.errors) {
				console.log("!! ERRORS !! ", json.errors);
				this.setState({
					errors: json.errors
				})
			} else {
				this.setState({
					registerSuccess: true
				})
				// this.props.statusUpdate()
			}
		})
	}
}

export default RegisterForm
