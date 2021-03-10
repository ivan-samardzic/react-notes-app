import React from 'react'
import {useState} from 'react'
import './NewNote.css'

const NewNote = ({addNote}) => {
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [text, setText] = useState('')

    const onSubmit= (event) => {
        event.preventDefault();

        addNote({title, text, date});

        setTitle('')
        setDate('')
        setText('')
    }

    return (
        <div className="new-note-container">
            <h3 className="new-note-title">Add New Note</h3>
            <form className="add-form-container m-3" onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" placeholder="Note Title" value={title} onChange={(event) => setTitle(event.target.value)}/>
                </div>
                <div className="form-group">
                    <label>Date</label>
                    <input type="text" placeholder="Node Date" value={date} onChange={(event) => setDate(event.target.value)}/>
                </div>
                <div className="form-group">
                    <label>Text</label>
                    <textarea type="text" placeholder="Note Text" rows='5' cols='40' value={text} onChange={(event) => setText(event.target.value)}/>
                </div>
                <button type="submit" className="btn btn-dark">Submit</button>
            </form>
        </div>
    )
}

export default NewNote
