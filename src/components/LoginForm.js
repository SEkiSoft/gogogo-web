import React from 'react';
import { browserHistory } from 'react-router';
import '../stylesheets/Login.scss';

function handleSignup(e) {
  e.preventDefault();
  browserHistory.push('signup');
}

const LoginForm = ({updateEmailInput, updatePasswordInput, email, password}) => (
  <div className="row">
    <div className="col-md-4 col-md-offset-4">
      <h2>Login</h2>
      <form onSubmit={updatePasswordInput}>
        <div className="form-group">
          <input 
            name="email" 
            onChange={updateEmailInput}
            value={email}
            className="form-control" 
            placeholder="Email" 
            required 
          />
        </div>
        <div className="form-group">
          <input
            onChange={updatePasswordInput}
            value={password}
            name="password"
            type="password"
            className="form-control"
            placeholder="Password"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary center-block">Login</button>
      </form>
      <h5>Don't have an account? Sign up <a href="" onClick={handleSignup}>here</a>.</h5>
    </div>
  </div> 
);

export default LoginForm;