import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Context } from '../index'
import eventService from '../services/event.service'
import EventItem from './EventItem'

export default function Event() {

    const { events } = useContext(Context)
    const [loaded, setLoaded] = useState(false)

    const eventList = events.events.map(event => {
        return (
            <EventItem key={event.id} event={event} />
        )
    })

    useEffect(() => {
        eventService.getAll()
            .then(data => events.setEvents(data))
            .then(() => setLoaded(() => true))
    }, [])
    if (!loaded) {
        return (
            <div>Loading...</div>
        )
    } else {
  return (
    <>
        {eventList}
    </>
  )}
}
