import React from 'react'

const Clock = () => {

    const generateTime = () => {
        const time = new Date();
        const hours = time.getHours();
        const minutes = time.getMinutes();

        return hours + ":" + minutes;
    }
    return (
        <div>
            {generateTime()}
        </div>
    )
}

export default Clock
