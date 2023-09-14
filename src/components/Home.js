import React from 'react'

import Notes from './Notes';

const Home = () => {
  return (
    <div>
      <div className="container">
        <h2 className="my-2">Add a Notes</h2>
        <form className="my-2">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Enter Title</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Enter Description</label>
            <input type="text" className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Enter Tag</label>
            <input type="text" className="form-control" id="exampleInputPassword1" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
      <Notes />
    </div>
  )
}

export default Home