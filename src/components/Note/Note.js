import React from 'react'
import './Note.css'

const Note = ({note, deleteNote}) => {
    return (
        <div className='note-container' key={note.id}>
            <i className="fas fa-exclamation-circle"></i>
            <div className='note-title'>{note.title}</div>
            <div className='note-date'>{note.date}</div> 
            <div className='note-text'>{note.text}</div>
            <button onClick={() => deleteNote(note)} className="note-btn btn btn-light"><i className="far fa-trash-alt"></i></button>
        </div>
    )
}

export default Note
