import React, { useContext } from 'react'
import { AppContext } from '../../../context/AppContext'

function TabSwitcher() {
    const { selectedEvent, setSelectedEvent } = useContext(AppContext)

    return (
        <div className='tab_switcher-main'>
            <div className="container">
                <div className="tabs">
                    <input
                        type="radio"
                        id="radio-1"
                        name="tabs"
                        value="all"
                        checked={selectedEvent == 'all'}
                        onChange={(e) => setSelectedEvent(e.target.value)}
                    />
                    <label className="tab" htmlFor="radio-1">All Events</label>

                    <input
                        type="radio"
                        id="radio-2"
                        name="tabs"
                        value="upcoming"
                        checked={selectedEvent == 'upcoming'}
                        onChange={(e) => setSelectedEvent(e.target.value)}
                    />
                    <label className="tab" htmlFor="radio-2">Upcoming Events</label>

                    <input
                        type="radio"
                        id="radio-3"
                        name="tabs"
                        value="past"
                        checked={selectedEvent == 'past'}
                        onChange={(e) => setSelectedEvent(e.target.value)}
                    />
                    <label className="tab" htmlFor="radio-3">Past Events</label>

                    <span className="glider"></span>
                </div>
            </div>
        </div>
    )
}

export default TabSwitcher
