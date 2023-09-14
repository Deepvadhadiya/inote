import NoteContext from "./noteContext";
import { useState } from 'react';

const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "6502905c1dba89ab1a78f805",
            "user": "65028f7c1dba89ab1a78f7f5",
            "title": "Language",
            "description": "Hindi, Gujarati, English, Marathi, Tamil",
            "tag": "Indian Languages",
            "date": "2023-09-14T04:47:24.776Z",
            "__v": 0
        },
        {
            "_id": "6502909f1dba89ab1a78f808",
            "user": "65028f7c1dba89ab1a78f7f5",
            "title": "State",
            "description": "Gujarat, Rajasthan, Uttar Pradesh, Punjab, Tamil Nadu",
            "tag": "Indian State",
            "date": "2023-09-14T04:48:31.807Z",
            "__v": 0
        },
        {
            "_id": "650291441dba89ab1a78f80f",
            "user": "65028f7c1dba89ab1a78f7f5",
            "title": "Country",
            "description": "India, Pakistan, Nepal, Shri Lanka, China",
            "tag": "Asian Country",
            "date": "2023-09-14T04:51:16.173Z",
            "__v": 0
        },
        {
            "_id": "6502905c1dba89ab1a78f801",
            "user": "65028f7c1dba89ab1a78f7f5",
            "title": "Language",
            "description": "Hindi, Gujarati, English, Marathi, Tamil",
            "tag": "Indian Languages",
            "date": "2023-09-14T04:47:24.776Z",
            "__v": 0
        },
        {
            "_id": "6502909f1dba89ab1a78f802",
            "user": "65028f7c1dba89ab1a78f7f5",
            "title": "State",
            "description": "Gujarat, Rajasthan, Uttar Pradesh, Punjab, Tamil Nadu",
            "tag": "Indian State",
            "date": "2023-09-14T04:48:31.807Z",
            "__v": 0
        },
        {
            "_id": "650291441dba89ab1a78f803",
            "user": "65028f7c1dba89ab1a78f7f5",
            "title": "Country",
            "description": "India, Pakistan, Nepal, Shri Lanka, China",
            "tag": "Asian Country",
            "date": "2023-09-14T04:51:16.173Z",
            "__v": 0
        },
        {
            "_id": "6502905c1dba89ab1a78f804",
            "user": "65028f7c1dba89ab1a78f7f5",
            "title": "Language",
            "description": "Hindi, Gujarati, English, Marathi, Tamil",
            "tag": "Indian Languages",
            "date": "2023-09-14T04:47:24.776Z",
            "__v": 0
        },
        {
            "_id": "6502909f1dba89ab1a78f80g",
            "user": "65028f7c1dba89ab1a78f7f5",
            "title": "State",
            "description": "Gujarat, Rajasthan, Uttar Pradesh, Punjab, Tamil Nadu",
            "tag": "Indian State",
            "date": "2023-09-14T04:48:31.807Z",
            "__v": 0
        },
        {
            "_id": "650291441dba89ab1a78f80u",
            "user": "65028f7c1dba89ab1a78f7f5",
            "title": "Country",
            "description": "India, Pakistan, Nepal, Shri Lanka, China",
            "tag": "Asian Country",
            "date": "2023-09-14T04:51:16.173Z",
            "__v": 0
        }
    ]
    const [notes, setNotes] = useState(notesInitial)

    //Add a Note
    const addNote = (title, description, tag) => {
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

    }

    //Edit a Note
    const editNote = (id) => {

    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;