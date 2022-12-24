import React, {useState} from 'react'
import Event from "./event.component";
import {Route} from "react-router-dom";
import SpecificEventItem from "./event-item.component";

export default function EventItem({event}) {
    const [showModal, setShowModal] = useState(false);

  return (
    <div className='event-item'>
        <h2>{event.description}</h2>
        <button className='btn btn-primary btn-block' onClick={() => setShowModal((prev) => !prev)}>{showModal ? "Close" : "Open"}</button>
        {showModal ? <SpecificEventItem event={event} onHide={() => setShowModal(false)}/> : null}
    </div> 
  )
}
