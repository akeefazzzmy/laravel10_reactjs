import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Task = () => {
  const [todos, setTodos] = useState([])
  const fetchTodos = async () => {
    const response = await axios.get('/api/getTodo')
    setTodos(response.data)
  }
  useEffect(() => {
    fetchTodos()
  }, [])

  console.log(todos)

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
            {
              todos?.map((todo, index) => (
                <tr key={todo.id} className='align-middle'>
                  <td>{index + 1}</td>
                  <td>{todo.name}</td>
                  <td>{todo.description}</td>
                  <td>{todo.created_at}</td>
                  <td>
                    <Link to={`/edit/${todo.id}`} className='btn btn-success m-2'>Edit</Link>
                    <a href="" className='btn btn-danger m-2'>Delete</a>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Task