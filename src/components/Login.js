import React from 'react';
import { hashHistory } from 'react-router';
import './stylesheets/Login.css';
import cx from 'classnames';

class Login extends React.Component {

	handleLogin = (e) => {
		e.preventDefault();
		if (this.refs.username.value && this.refs.password.value) {
			hashHistory.push('play');
		}
	}

	render() {
		return (
			<div className="row">
				<div className="col-md-3 col-centered">
					<h2>Login</h2>
					<form action="/" method="post">
						<div className="form-group">
			              <input ref='username' name="username" className="form-control" placeholder="Username" required/>
			            </div>
			            <div className="form-group">
			              <input ref='password' name="password" type="password" className="form-control" placeholder="Password" required/>
			            </div>
			            <button 
			            	type="submit"
			            	className="btn btn-primary center-block"
			            	onClick={this.handleLogin}>
			            	Login
			            </button>
					</form>
					<h5>Don't have an account? Sign up <a href="">here</a>.</h5>
				</div>
			</div>
		);

	}
}

export default Login