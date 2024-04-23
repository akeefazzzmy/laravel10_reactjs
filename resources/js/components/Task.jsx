import React from 'react'
import { Link } from 'react-router-dom'

const Task = () => {
  return (
    <div className='container'>
      <div className="dflex justify-content-between align-items-center">
        <div className="h3">Display To Do</div>
        {/* <a href="/create" className='btn btn-primary'>Add</a> */}
        <Link to="/create" className='btn btn-primary'>Add</Link>
      </div>
      <div className="table-responsive mt-5">
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>Sr. No</th>
              <th>Task</th>
              <th>Desc</th>
              <th>DataTime</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className='align-middle'>
              <td>a</td>
              <td>b</td>
              <td>c</td>
              <td>d</td>
              <td>
                {/* <a href="/edit/1" className='btn btn-success m-2'>Edit</a>
                <a href="" className='btn btn-danger m-2'>Delete</a> */}
                <Link to="/edit/1" className='btn btn-success m-2'>Edit</Link>
                <a href="" className='btn btn-danger m-2'>Delete</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Task