import React from 'react'
import { Link } from 'react-router-dom'

const edit = () => {
  return (
    <div className='container'>
      <div className="d-flex justify-content-between align-items-center">
        <div className="h3">Edit Todo</div>
        <Link to="/" className='btn btn-primary'>Back</Link>
      </div>
      <div className="card mt-5">
        <div className="card-body p-5">
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
            <input type="button" className='btn btn-primary' value="Edit To Do" />
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default edit