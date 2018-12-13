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
		let style = {width: 20, marginRight:5}

		return (
		<div className="registerPage">
			<form  onSubmit={this.onSubmit}>
					<div className="missionStatement">
					Our mission is to connect with your friends and family through your personal hiking adventure.
					<br/>
					<br/><img src={require('../assets/share.png')} style={style} />   Share your private hikes with your close friends.<br/>
					<br/><img src={require('../assets/journal.png')} style={style}/>    Create experiences through tips and photos.<br/><br/>
					<img src={require('../assets/search.png')} style={style} />    Find new trails and expand your private collection.
					</div>

				<div className="registerForm">
					<div className="innerRegister">
						<h2 id="welcomeH2">Welcome!</h2>
						<h2 id="welcomeH2">Join Up Here!</h2>
						<input
							className= "registerInput"
							type="email"
							name="email"
							value={email}
							onChange={this.onChange}
						/>
						{this.state.errors.email && <div>Error: Email  {this.state.errors.email[0]}</div>}
						<input
							className= "registerInput"
							type="password"
							name="password"
							value={password}
							onChange={this.onChange}
						/>
						{this.state.errors.password && <div>Error: Password  {this.state.errors.password[0]}</div>}
						<button className="joinUp">
							Join Up
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
