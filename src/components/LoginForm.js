import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const LoginForm = ({ updateEmailInput, updatePasswordInput, handleLogin, email, password }) => (
  <div className="row">
    <div className="col m4 offset-m4">
      <h3 id="login">Login</h3>
      <form onSubmit={handleLogin} className="col m12">
        <div className="row">
          <div className="input-field col m12">
            <input
              onChange={updateEmailInput}
              value={email}
              id="email"
              type="email"
              className="validate"
              required
            />
            <label for="email" className="left-align" data-error="Incorrect Format">Email</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col m12">
            <input
              onChange={updatePasswordInput}
              value={password}
              id="password"
              type="password"
              className="validate"
              required
            />
            <label for="password" className="left-align">Password</label>
          </div>
        </div>
        <button type="submit" className="waves-effect waves-light btn-large cyan">Login</button>
      </form>
      <h6>Don't have an account? Sign up <Link to="/signup">here</Link>.</h6>
    </div>
  </div>
);

LoginForm.propTypes = {
  updateEmailInput: PropTypes.func.isRequired,
  updatePasswordInput: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
};

export default LoginForm;
