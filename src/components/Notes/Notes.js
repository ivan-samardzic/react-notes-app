import React from 'react'
import './Notes.css'
import Note from '../Note/Note'

const Notes = ({notes}) => {
    return (
        <div className='notes-box'>
            {notes.map((note, index) => 
                <Note note={note} />
            )}
        </div>
    )
}

export default Notes
