import React, { Component } from "react";

import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.props);
    this.props.signIn(this.state);
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  render() {
    const { authError } = this.props;
    return (
      <div className="container mt-4">
        {authError && (
          <div
            className="alert alert-danger alert-dismissible fade show"
            role="alert"
          >
            {authError}
            <button
              className="close"
              type="button"
              data-dismiss="alert"
              aria-label="Close"
            >
              &times;
            </button>
          </div>
        )}
        <h1 className="text-center mb-4">Sign In</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              onChange={this.handleChange}
            />
            <small className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="btn btn-info">
            Sign In
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authError: state.auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: credentials => dispatch(signIn(credentials))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
