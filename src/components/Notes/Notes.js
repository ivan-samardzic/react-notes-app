import React from 'react'
import './Notes.css'
import Note from '../Note/Note'

const Notes = ({notes, deleteNote}) => {
    return (
        <div className='notes-box'>
            {notes.map((note, index) => 
                <Note note={note}  deleteNote={deleteNote} />
            )}
        </div>
    )
}

export default Notes
