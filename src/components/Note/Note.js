import React from 'react'
import './Note.css'
import NoteContext from '../../context/noteContext'

const Note = ({note}, props) => {
    return (
        <NoteContext.Consumer>
            {context => (
                <div className='note-container' key={note.id}>
                <i className="fas fa-exclamation-circle"></i>
                <div className='note-title'>{note.title}</div>
                <div className='note-date'>{note.date}</div> 
                <div className='note-text'>{note.text}</div>
                <button onClick={() => context.deleteNote(note)} className="note-btn btn btn-light"><i className="far fa-trash-alt"></i></button>
            </div>
            )}
            
        </NoteContext.Consumer>
    )
}

export default Note
