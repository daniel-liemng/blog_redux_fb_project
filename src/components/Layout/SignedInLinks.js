import React from 'react'
import { NavLink } from 'react-router-dom'

import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = props => {
  const { profile } = props

  return (
    <ul className='navbar-nav ml-auto'>
      <li className='nav-item'>
        <NavLink to='/create' className='nav-link'>
          New Post
        </NavLink>
      </li>
      <li className='nav-item'>
        <a type='button' onClick={props.signOut} className='nav-link'>
          Sign Out
        </a>
      </li>
      <li className='nav-item'>
        <NavLink to='/' className='nav-link initial'>
          Hi, {profile.username}
        </NavLink>
      </li>
    </ul>
  )
}

const mapStateToProps = state => {
  return {
    profile: state.firebase.profile
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks)
