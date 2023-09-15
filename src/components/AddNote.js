import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext';


const AddNote = (props) => {
    const context = useContext(noteContext);

    const { addNote } = context;

    const [note, setNote] = useState({title: "", description: "", tag: ""});

    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({title: "", description: "", tag: ""});
        props.showAlert("Added Successfully", "success");
    }

    const onChange = (e) => {
        setNote({...note, [e.target.name]: e.target.value})
    }

    return (
        <div className="container">
            <h2 className="my-2">Add a Notes</h2>
            <form className="my-2">
                <div className="form-group">
                    <label htmlFor="title">Enter Title</label>
                    <input type="text" className="form-control" value={note.title} name="title" id="title" aria-describedby="emailHelp" onChange={onChange} minLength={5} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Enter Description</label>
                    <input type="text" className="form-control" value={note.description} name="description" id="description" onChange={onChange} minLength={5} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="tag">Enter Tag</label>
                    <input type="text" className="form-control" value={note.tag} name="tag" id="tag" onChange={onChange} minLength={5} required/>
                </div>
                <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
            </form>
        </div>
    )
}

export default AddNote
