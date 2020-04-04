import React from 'react'
import { Link } from 'react-router-dom'

import { FaBlog, FaListUl } from 'react-icons/fa'

import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

import { connect } from 'react-redux'

const Navbar = props => {
  const { auth } = props

  const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-green'>
      <div className='container'>
        <Link className='navbar-brand' to='/'>
          <h4>
            <FaBlog className='mb-0' /> Blog
          </h4>
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          {/* <span className="navbar-toggler-icon"></span> */}
          <FaListUl className='btn-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          {links}
        </div>
      </div>
    </nav>
  )
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Navbar)
