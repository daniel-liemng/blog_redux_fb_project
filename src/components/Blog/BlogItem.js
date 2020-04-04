import React from 'react'
import { Link } from 'react-router-dom'

import moment from 'moment'

const BlogItem = ({ id, title, content, authorUsername, createdAt }) => {
  return (
    <article className='media my-3'>
      <img src='' alt='' />
      <div className='media-body'>
        <Link to={`/blog/${id}`} className='blog-link'>
          <h4>{title}</h4>
          <span className='text-muted'>
            By <strong className='text-pink'>{authorUsername}</strong>
          </span>
        </Link>
        <p className='mt-3'>{content}</p>

        <hr />
        <p className='text-muted mt-0 font-italic'>
          Posted: {moment(createdAt.toDate()).calendar()}
        </p>
      </div>
    </article>
  )
}

export default BlogItem
