import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import { connect } from 'react-redux'

import { signUp } from '../../store/actions/authActions'

class SignUp extends Component {
  state = {
    username: '',
    email: '',
    password: ''
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.signUp(this.state)
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render() {
    const { auth, authError } = this.props

    if (auth.uid) return <Redirect to='/' />

    return (
      <div className='container mt-4'>
        {authError && (
          <div
            className='alert alert-danger alert-dismissible fade show'
            role='alert'
          >
            {authError}
            <button
              className='close'
              type='button'
              data-dismiss='alert'
              aria-label='Close'
            >
              &times;
            </button>
          </div>
        )}
        <h1 className='text-center mb-4'>Sign Up</h1>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              className='form-control'
              id='username'
              onChange={this.handleChange}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email address</label>
            <input
              type='email'
              className='form-control'
              id='email'
              onChange={this.handleChange}
              required
            />
            <small className='form-text text-muted'>
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              className='form-control'
              id='password'
              onChange={this.handleChange}
              required
            />
          </div>

          <button type='submit' className='btn'>
            Sign Up
          </button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signUp: newUser => dispatch(signUp(newUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
