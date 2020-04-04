import React from 'react'
import { Redirect } from 'react-router-dom'

import { connect } from 'react-redux'

import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

import BlogList from '../Blog/BlogList'
import Notification from './Notification'

const Dashboard = ({ blogs, auth, notifications }) => {
  if (!auth.uid) return <Redirect to='/signin' />

  return (
    <div className='dashboard container mt-4'>
      <div className='row'>
        <div className='col col-sm-12 col-md-7'>
          <BlogList blogs={blogs} />
        </div>
        <div className='col col-sm-12 col-md-5'>
          <Notification notifications={notifications} />
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    // No async - state/blogReducer/blogState
    // blogs: state.blog.blogs

    // Async from firestore
    blogs: state.firestore.ordered.blogs,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'blogs', orderBy: ['createdAt', 'desc'] },
    { collection: 'notifications', limit: 4, orderBy: ['time', 'desc'] }
  ])
)(Dashboard)
