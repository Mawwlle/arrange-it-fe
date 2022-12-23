import React from 'react'

export default function EventItem({event}) {
  return (
    <div className='event-item'>
        <h2>{event.description}</h2>
        <p>{event.date}</p>
        <button className='btn btn-primary btn-block'>Open</button>
    </div> 
  )
}
