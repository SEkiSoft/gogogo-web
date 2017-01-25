import React, { PropTypes } from "react";

const SignupForm = ({ state, updateEmailInput, updatePasswordInput, updateUserInput, handleSignup }) => (
  <div className="row">
    <div className="col-md-4 col-md-offset-4">
      <h2>Account Signup</h2>
      <form onSubmit={handleSignup}>
        <div className="form-group">
          <label htmlFor="id">Username</label>
          <input
            value={state.username}
            onChange={updateUserInput}
            className="form-control"
            placeholder="Enter a username"
            id="username"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            value={state.password}
            onChange={updatePasswordInput}
            className="form-control"
            id="password"
            placeholder="Enter a password"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            value={state.email}
            onChange={updateEmailInput}
            className="form-control"
            id="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary btn-md">Signup</button>
      </form>
    </div>
  </div>
);

SignupForm.propTypes = {
  state: PropTypes.shape(PropTypes.object).isRequired,
  updateEmailInput: PropTypes.func.isRequired,
  handleSignup: PropTypes.func.isRequired,
  updatePasswordInput: PropTypes.func.isRequired,
  updateUserInput: PropTypes.func.isRequired
};


export default SignupForm;
