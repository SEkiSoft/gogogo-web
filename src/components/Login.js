import React from 'react';
import { browserHistory } from 'react-router';
import './stylesheets/Login.css';
import cx from 'classnames';

class Login extends React.Component {
  handleLogin = (e) => {
    e.preventDefault();
    if (this.refs.email.value && this.refs.password.value) {
      browserHistory.push("play");
    }
  }

  handleSignup = (e) => {
    e.preventDefault();
    browserHistory.push("signup");
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <h2>Login</h2>
          <form onSubmit={this.handleLogin}>
            <div className="form-group">
              <input ref="email" name="email" className="form-control" placeholder="Email" required/>
            </div>
            <div className="form-group">
              <input ref="password" name="password" type="password" className="form-control" placeholder="Password" required/>
            </div>
            <button type="submit" className="btn btn-primary center-block">Login</button>
          </form>
          <h5>Don't have an account? Sign up <a href="" onClick={this.handleSignup}>here</a>.</h5>
        </div>
      </div>
    );

  }
}

export default Login