import React from 'react'
import './Notes.css'
import Note from '../Note/Note'
import NoteContext from '../../context/noteContext'

const Notes = props => {
    return (
        <NoteContext.Consumer>
            {context => (
                <div className='notes-box'>
                {context.notes.map((note, index) => 
                    <Note note={note} />
                )}
            </div>
            )}
            
        </NoteContext.Consumer>
    );
};

export default Notes
