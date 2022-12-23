import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Context } from '../index'
import eventService from '../services/event.service'

export default function Event() {

    const { events } = useContext(Context)
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        eventService.getAll()
        .then(data => {
            events.setEvents(data)})
        // .then(() => console.log(events.events[0].place))
        .then(() => setLoaded(() => true))
    }, [])
    if (!loaded) {
        return (
            <div>Loading...</div>
        )
    } else {
  return (
    <>
    {/* {console.log(events.events[0]?.date)} */}
        {events.events.map(event => {
            return (
                <div>
                    <h2>{event.description}</h2>
                    <h3>{event.date}</h3>
                </div> 
            )
        })}
    </>
  )}
}
