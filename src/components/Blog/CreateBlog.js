import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import { connect } from 'react-redux'

import { createBlog } from '../../store/actions/blogActions'

class CreateBlog extends Component {
  state = {
    title: '',
    content: ''
  }

  handleSubmit = e => {
    e.preventDefault()

    this.props.createBlog(this.state)
    this.props.history.push('/')
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render() {
    const { auth } = this.props

    if (!auth.uid) return <Redirect to='/signin' />

    return (
      <div className='container mt-4'>
        <h1 className='text-center mb-4'>Create New Post</h1>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label htmlFor='title'>Title</label>
            <input
              type='text'
              className='form-control'
              id='title'
              onChange={this.handleChange}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='content'>Content</label>
            <textarea
              id='content'
              className='form-control'
              rows='5'
              onChange={this.handleChange}
              required
            />
          </div>
          <button type='submit' className='btn'>
            Create
          </button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createBlog: blog => dispatch(createBlog(blog))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateBlog)
