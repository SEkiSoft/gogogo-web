import React from "react";

class Signup extends React.Component {

  onSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <h2>Account Signup</h2>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="id">Username</label>
              <input
                className="form-control"
                placeholder="Enter a username"
                id="username"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                className="form-control"
                id="password"
                placeholder="Enter a password"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
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
  }
}

export default Signup;
