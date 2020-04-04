import React from 'react'
import moment from 'moment'

const Notification = ({ notifications }) => {
  return (
    <>
      <div className='card mt-3'>
        <div className='card-header text-center'>
          <h5>Notifications</h5>
        </div>

        <ul className='list-group list-group-flush'>
          {notifications &&
            notifications.map(item => (
              <li key={item.id} className='list-group-item'>
                <span className='text-pink'>{item.user} </span>
                {item.content}
                <br />
                <small>{moment(item.time.toDate()).fromNow()}</small>
              </li>
            ))}
        </ul>
      </div>
    </>
  )
}

export default Notification
