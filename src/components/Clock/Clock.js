import React from 'react'
import './Clock.css'

const Clock = () => {

    const generateTime = () => {
        const time = new Date();
        const hours = time.getHours();
        const minutes = time.getMinutes();
        if(minutes < 10) {
            return hours + ":" + "0" + minutes;
        } else {
            return hours + ":" + minutes;
        }
    }
    return (
        <div className="clock-box">
            <p>{generateTime()}</p>
        </div>
    )
}

export default Clock
