import React from 'react'

const Home = () => {
  return (
    <div>
      <div className="container">
        <h2 className="my-2">Add a Notes</h2>
        <form className="my-2">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
      <div className="container">
        <h2 className="my-2">Your Notes</h2>
      </div>
    </div>
  )
}

export default Home
