import NoteContext from "./noteContext";
import { useState } from 'react';

const NoteState = (props) => {
    const host = "http://localhost:5000"
    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial)

    // Get all Note
    const getNotes = async () => {
        //API Call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwMjhmN2MxZGJhODlhYjFhNzhmN2Y1In0sImlhdCI6MTY5NDY5MDY1NX0.qwHKr1sSZBq0Aj3SPSmD53WxXLQQw3gUXShhKWDunUU"
            }
        })
        const json = await response.json()
        setNotes(json)
    }
    // Add a Note
    const addNote = async (title, description, tag) => {
        //API Call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwMjhmN2MxZGJhODlhYjFhNzhmN2Y1In0sImlhdCI6MTY5NDY5MDY1NX0.qwHKr1sSZBq0Aj3SPSmD53WxXLQQw3gUXShhKWDunUU"
            },
            body: JSON.stringify({ title, description, tag })
        })
        const json = response.json();
        //Logic for add in client
        const note = {
            "_id": "64f1900e911a978e95bee318",
            "user": "65028f7c1dba89ab1a78f7f5",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2023-09-01T07:17:34.593Z",
            "__v": 0
        }
        setNotes(notes.concat(note))
    }
    // Delete a Note
    const deleteNote = async (id) => {
        //API Call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwMjhmN2MxZGJhODlhYjFhNzhmN2Y1In0sImlhdCI6MTY5NDY5MDY1NX0.qwHKr1sSZBq0Aj3SPSmD53WxXLQQw3gUXShhKWDunUU"
            }
        })
        const json = response.json();
        //Logic for delete in client
        console.log("Deleting a note with id" + id);
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes);
    }
    // Edit a Note
    const editNote = async (id, title, description, tag) => {
        //API Call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwMjhmN2MxZGJhODlhYjFhNzhmN2Y1In0sImlhdCI6MTY5NDY5MDY1NX0.qwHKr1sSZBq0Aj3SPSmD53WxXLQQw3gUXShhKWDunUU"
            },
            body: JSON.stringify({ title, description, tag })
        })
        const json = response.json();
        let newNotes = JSON.parse(JSON.stringify(notes))
        //Logic for edit in client
        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tag = tag;
                break;
            }
            
        }
        setNotes(newNotes);
    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;