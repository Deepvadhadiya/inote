import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext';


const AddNote = () => {
    const context = useContext(noteContext);

    const { addNote } = context;

    const [note, setNote] = useState({title: "", description: "", tag: "Default"});

    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
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
                    <input type="text" className="form-control" name="title" id="title" aria-describedby="emailHelp"onChange={onChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Enter Description</label>
                    <input type="text" className="form-control" name="description" id="description" onChange={onChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="tag">Enter Tag</label>
                    <input type="text" className="form-control" name="tag" id="tag" onChange={onChange}/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
            </form>
        </div>
    )
}

export default AddNote
