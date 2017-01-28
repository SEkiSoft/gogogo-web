import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const LoginForm = ({ updateEmailInput, updatePasswordInput, handleLogin, email, password }) => (
  <div className="row">
    <div className="col-md-4 col-md-offset-4">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <input
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
            type="password"
            className="form-control"
            placeholder="Password"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary center-block">Login</button>
      </form>
      <h5>Don't have an account? Sign up <Link to="/signup">here</Link>.</h5>
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
