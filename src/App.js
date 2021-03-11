import './App.css';
import { useState } from 'react'
import Header from './components/Header/Header'
import Notes from './components/Notes/Notes'
import NewNote from './components/NewNote/NewNote'
import Footer from './components/Footer/Footer'
import NoteState from '../src/context/NoteState'

const App = (props) => {
  return (
    <NoteState>
      <div className="container-fluid">
        <Header heading='Notes App' />
        <Notes />
        <NewNote />
        <Footer />
      </div>
    </NoteState>
  );
}

export default App;
