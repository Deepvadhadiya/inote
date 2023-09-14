import React from 'react'

const Noteitem = (props) => {
    const { note } = props;
    return (
        <div className="col-md-3 col-12 col-sm-6">
            <div className="card my-3">
                <div className="card-body">
                    <div className="d-flex align-items-center my-2">
                        <h5 className="card-title m-0">{note.title}</h5>
                        <i className="fa-regular fa-trash-can mx-2"></i>
                        <i className="fa-regular fa-pen-to-square mx-2"></i>
                    </div>
                    <p className="card-text">{note.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Noteitem
