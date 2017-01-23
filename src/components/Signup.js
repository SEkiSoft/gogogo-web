import React from 'react';

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
              <label>Username</label>
              <input
                className="form-control" ref="username"
                placeholder="Enter a username" required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                className="form-control" ref="password"
                placeholder="Enter a password" required
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                className="form-control" ref="email"
                placeholder="Enter your email" required
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
