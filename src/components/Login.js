import React from 'react';
import './stylesheets/Title.css';

class Login extends React.Component {
	render() {
		return (
			<div className="row">
				<div className="col-md-3 col-centered">
					<h2>Login</h2>
					<form action="/" method="post">
						<div className="form-group">
			              <input name="username" className="form-control" placeholder="Username" required/>
			            </div>
			            <div className="form-group">
			              <input name="password" type="password" className="form-control" placeholder="Password" required/>
			            </div>
			            <button type="submit" className="btn btn-primary center-block">Login</button>
					</form>
					<h5>Don't have an account? Sign up <a href="">here</a>.</h5>
				</div>
			</div>
		);

	}
}

export default Login