import React, { useState, useReducer } from 'react';
import NoteContext from './noteContext';


const NoteState = props => {
    const [notes, setNotes] = useState([
        {
          id: 1,
          title : "Important Dentist Appointment",
          text : "Go to the dentist and check if there are any changes in the dents after removing the braces, don't forget to pay the last installment for the braces. Return all gums packs you did not use. ",
          date : "2 Jun"
        },
        {
          id: 2,
          title : "Parent Meeting At School",
          text : "Meeting on the topic of the excursion for Mihael, presentation of the trip, presentation of the excursion payment plan and awarding of commendations for this school year.",
          date : "4 Jun"
        },
        {
          id: 3,
          title : "Going Out With Friends",
          text : "Have a good time and when you come home, be sure to kiss her. Enjoy in the time with the friends, help them meet some girls. Joke about girls, sport and alcohol, you know you will talk about politics at the end.",
          date : "5 Jun"
        }
      ])

      const addNote = (note) => {
        const id = Math.round(Math.random() * 10000) + 1;
        const newNote = {id, ...note};

        setTimeout(() => {
            setNotes([...notes, newNote]);
        }, 500);
      };
    
      const deleteNote = (deletedNote) => {
        const newNotes = notes.filter((note) => 
        note.id !== deletedNote.id);

        setTimeout(() => {
            setNotes(newNotes);
        }, 500);
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