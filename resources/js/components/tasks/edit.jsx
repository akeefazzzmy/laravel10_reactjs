import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const edit = () => {
  const {todoId} = useParams()

  const [olddata, setOlddata] = useState([])
  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")
  const [date, setDate] = useState("")
  const updateTodo = async() => {
    const details = {
      name,
      desc,
      date
    }
    console.log(details)
  }
  return (
    <div className='container'>
      <div className="d-flex justify-content-between align-items-center">
        <div className="h3">Edit Todo</div>
        <Link to="/" className='btn btn-primary'>Back</Link>
      </div>
      <div className="card mt-5">
        <div className="card-body p-5">
          <input type="number" value={todoId}/>
          <div className="row pt-3">
            <div className="col-lg-4">
              <input type="text" className='form-control' placeholder='Enter Todo Name' />
            </div>
            <div className="col-lg-4">
              <input type="text" className='form-control' placeholder='Enter Todo Description' />
            </div>
            <div className="col-lg-4">
              <input type="datetime-local" className='form-control' />
            </div>
            <div className="text-center mt-4">
            <input type="button" onClick={(e)=>updateTodo()} className='btn btn-primary' value="Update To Do" />
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default edit