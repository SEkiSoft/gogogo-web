import React from 'react';

class Login extends React.Component {
	render() {
		return (
			<div className="row">
				<div className="col-md-6 col-centered">
					<form action="/" method="post">
						<div className="form-group">
			              <input name="username" className="form-control" placeholder="Username" required/>
			            </div>
			            <div className="form-group">
			              <input name="password" type="password" className="form-control" placeholder="Password" required/>
			            </div>
			            <button type="submit" className="btn btn-primary center-block">Login</button>
					</form>
				</div>
			</div>
		);

	}
}

export default Login