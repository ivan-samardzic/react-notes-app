import './App.css';
import { useState } from 'react'
import Header from './components/Header/Header'
import Notes from './components/Notes/Notes'
import NewNote from './components/NewNote/NewNote'
import Footer from './components/Footer/Footer'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [notes, setNotes] = useState([
    {
      id: 1,
      title : "Important Dentist Appointment",
      text : "Go to the dentist and check if there are any changes in the dental saliva after removing the braces, don't forget to pay the last installment for the braces. Ask for another dental gums pack. ",
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

  const addNote = (newNote) => {
    const id = Math.round(Math.random() * 10000) + 1;
    const newNotes = {id, ...newNote};
    setNotes([...notes, newNotes]);
  }

  const deleteNote = (deletedNote) => {
    const newNotes = notes.filter((note) => 
    note.id !== deletedNote.id);

    setNotes(newNotes);
  }

  return (
    <div className="container-fluid">
      <Header heading='Notes App' />
      <Notes notes={notes}  deleteNote={deleteNote}/>
      <NewNote addNote={addNote}/>
      <Footer />
    </div>
  );
}

export default App;
