import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const Create = () => {
  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")
  const [date, setDate] = useState("")
  const createTodo = async(e) => {
    e.preventDefault()
    const data = {
      name,
      desc,
      date
    }
    axios.post('/api/createTodo', data)
    .then(response => console.log(response))
  }

  return (
    <div className='container'>
      <div className="d-flex justify-content-between align-items-center">
        <div className="h3">Create To Do</div>
        {/* <a href="/" className='btn btn-primary'>Back</a> */}
        <Link to="/" className="btn btn-primary">Back</Link>
      </div>
      <div className="container">
        <span>Name: {name}</span> | <span>Description: {desc}</span> | <span>Date: {date}</span>
      </div>
      <form onSubmit={(e)=>createTodo(e)}>
      <div className="card mt-5">
        <div className="card-body p-5">
          <div className="row pt-3">
            <div className="col-lg-4">
              <input type="text" className='form-control' placeholder='Enter To Do Name' onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className="col-lg-4">
              <input type="text" className='form-control' placeholder='Enter To Do Description' onChange={(e)=>setDesc(e.target.value)}/>
            </div>
            <div className="col-lg-4">
              <input type="datetime-local" className='form-control' onChange={(e)=>setDate(e.target.value)}/>
            </div>
          </div>
          <div className="text-center mt-4">
            <input type="submit" className='btn btn-primary' value="Submit To Do" />
          </div>
        </div>
      </div>
      </form>
    </div>
  )
}

export default Create