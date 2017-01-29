import React, { PropTypes } from "react";

const SignupForm = ({ state, updateEmailInput, updatePasswordInput, updateUserInput, handleSignup }) => (
  <div className="row">
    <div className="col m4 offset-m4">
      <h4>Account Signup</h4>
      <form onSubmit={handleSignup} className="col m12">
        <div className="row">
          <div className="input-field col m12">
            <input
              value={state.username}
              onChange={updateUserInput}
              className="validate"
              type="text"
              id="user"
              required
            />
            <label for="user" className="left-align">Username</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col m12">
            <input
              value={state.password}
              onChange={updatePasswordInput}
              className="validate"
              id="password"
              type="password"
              required
            />
            <label for="password" className="left-align">Password</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col m12">
            <input
              value={state.email}
              onChange={updateEmailInput}
              className="validate"
              id="email"
              type="email"
              required
            />
            <label for="email" className="left-align" data-error="Incorrect Format">Email</label>
          </div>
        </div>
        <button type="submit" className="waves-effect waves-light btn-large cyan">Signup</button>
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
