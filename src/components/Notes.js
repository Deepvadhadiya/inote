import React, { useContext, useEffect, useRef, useState } from 'react'

import noteContext from '../context/notes/noteContext';
import Noteitem from './Noteitem';
import AddNote from './AddNote';

const Notes = (props) => {

    const context = useContext(noteContext);

    const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" });

    const { notes, getNotes, editNote } = context

    useEffect(() => {
        getNotes();
    })

    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag });
    }

    const ref = useRef(null)
    const refClose = useRef(null)

    const handleClick = (e) => {
        editNote(note.id, note.etitle, note.edescription, note.etag)
        refClose.current.click();
        props.showAlert("Updated Successfully", "success");
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    return (
        <div className="container my-3">
            <AddNote showAlert={props.showAlert}/>
            <button type="button" className="btn btn-primary d-none" data-toggle="modal" ref={ref} data-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form className="my-2">
                                <div className="form-group">
                                    <label htmlFor="etitle">Enter Title</label>
                                    <input type="text" className="form-control" name="etitle" id="etitle" aria-describedby="emailHelp" value={note.etitle} onChange={onChange} minLength={5} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="edescription">Enter Description</label>
                                    <input type="text" className="form-control" value={note.edescription} name="edescription" id="edescription" onChange={onChange} minLength={5} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="etag">Enter Tag</label>
                                    <input type="text" className="form-control" value={note.etag} name="etag" id="etag" onChange={onChange} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button disabled={note.etitle.length<5 || note.edescription.length<5} onClick={handleClick} type="button" className="btn btn-primary">Update Note</button>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className="my-3 mx-2">Your Notes</h2>
            <div className="container">
                <div className="row pl-2">
                    {notes.length === 0 && "No notes to Display."}
                    {
                        notes.map((note) => {
                            return <Noteitem key={note._id} showAlert={props.showAlert} updateNote={updateNote} note={note} />;
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Notes
