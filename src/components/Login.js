import React from 'react';
import { hashHistory } from 'react-router';
import '../stylesheets/Login.scss';
import cx from 'classnames';

class Login extends React.Component {

  handleLogin = (e) => {
    e.preventDefault();
    if (this.refs.username.value && this.refs.password.value) {
      hashHistory.push('play');
    }
  }

  handleSignup = (e) => {
    e.preventDefault();
    hashHistory.push('signup');
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-3 col-centered">
          <h2>Login</h2>
          <form onSubmit={this.handleLogin}>
            <div className="form-group">
              <input ref="username" name="username" className="form-control" placeholder="Username" required />
            </div>
            <div className="form-group">
              <input ref="password" name="password" type="password" className="form-control" placeholder="Password" required />
            </div>
            <button type="submit" className="btn btn-primary center-block">Login</button>
          </form>
          <h5>Don't have an account? Sign up <a href="" onClick={this.handleSignup}>here</a>.</h5>
        </div>
      </div>
    );
  }
}

export default Login;
