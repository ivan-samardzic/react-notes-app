import React, { useState, useReducer, useEffect } from 'react';
import NoteContext from './noteContext';


const NoteState = props => {
    const [notes, setNotes] = useState([])

    useEffect(() => {
      const storedNotes = JSON.parse(
        localStorage.getItem('react-notes-app')
        );
  
        if (storedNotes) {
          setNotes(storedNotes);
        }
      }, []);

      const saveToLocalStorage = (notes) => {
        localStorage.setItem('react-notes-app', JSON.stringify(notes));
      }

      const addNote = (note) => {
        const id = Math.round(Math.random() * 10000) + 1;
        const newNote = {id, ...note};
        const newNotes = [...notes, newNote];
        setNotes(newNotes);  
        saveToLocalStorage(newNotes);
      };
    
      const deleteNote = (deletedNote) => {
        const newNotes = notes.filter((note) => 
        note.id !== deletedNote.id);
        setNotes(newNotes);
        saveToLocalStorage(newNotes);
      };

      return (
          <NoteContext.Provider 
          value={{
              notes: notes,
              addNote: addNote,
              deleteNote: deleteNote
          }}>
              {props.children}
          </NoteContext.Provider>
      )
}

export default NoteState;