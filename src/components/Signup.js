import React from 'react';

class Signup extends React.Component {

  constructor(props) {
    super(props);
  }

  onSubmit = (e) => {
    e.preventDefault();

    console.log(this.refs.name.value);
    console.log(this.refs.username.value);
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-3 col-centered">
          <h2>Account Signup</h2>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                className="form-control" ref="name"
                placeholder="Enter your name" required
              />
            </div>
            <div className="form-group">
              <label>Username</label>
              <input
                className="form-control" ref="username"
                placeholder="Enter your username" required
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                className="form-control" ref="email"
                placeholder="Enter your email" required
              />
            </div>
            <button type="submit" className="btn btn-primary btn-md">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
