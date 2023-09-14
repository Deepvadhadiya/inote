import NoteContext from "./noteContext";
import { useState } from 'react';

const NoteState = (props) => {
    const host = "http://localhost:5000"
    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial)

    //Get all Note
    const getNotes = async () => {
        //API Call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwMjhmN2MxZGJhODlhYjFhNzhmN2Y1In0sImlhdCI6MTY5NDY4NzYyM30.N2wf0d9HxHHsSkekY78zZib0pPP6sZmQ4VJJCfjCR-U'
            }
        }); 
        const json = await response.json()
        setNotes(json)
    }

    //Add a Note
    const addNote = async (title, description, tag) => {
        //API Call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwMjhmN2MxZGJhODlhYjFhNzhmN2Y1In0sImlhdCI6MTY5NDY4NzYyM30.N2wf0d9HxHHsSkekY78zZib0pPP6sZmQ4VJJCfjCR-U'
            },
            body: JSON.stringify(title, description, tag)
        }); 
        //Logic
        const note = {
            "_id": "650291441dba89ab1a78f80u",
            "user": "65028f7c1dba89ab1a78f7f54",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2023-09-14T04:51:16.173Z",
            "__v": 0
        };
        setNotes(notes.concat(note))
    }

    //Delete a Note
    const deleteNote = (id) => {
        //API Call
        //Logic
        console.log("Deleteing the note with id " + id)
        const newNotes = notes.filter((note) => { return note._id !== id });
        setNotes(newNotes);
    }

    //Edit a Note
    const editNote = async (id, title, description, tag) => {
        //API Call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwMjhmN2MxZGJhODlhYjFhNzhmN2Y1In0sImlhdCI6MTY5NDY4NzYyM30.N2wf0d9HxHHsSkekY78zZib0pPP6sZmQ4VJJCfjCR-U'
            },
            body: JSON.stringify(title, description, tag)
        });
        const json = response.json();
        //Logic
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;
            }
        }
    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;