import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'

const Task = () => {
  const [todos, setTodos] = useState([])
  const [page, setPage] = useState(1)

  const fetchTodos = async () => {
    const response = await axios.get('/api/getTodo?page='+page)
    setTodos(response.data)
  }

  const deleteTodo = async (id) => {
    const confirmEvent = confirm('Are you sure?')
    if (confirmEvent) {
      const result = await axios.delete(`/api/deleteTodo/${id}`)
      if (result) {
        fetchTodos()
      }
    }
  }

  useEffect(() => {
    fetchTodos()
  }, [page])

  const paginatePage=async(link)=>{
    const url = new URL(link)
    console.log(url.searchParams.get('page'))
    setPage(url.searchParams.get('page'))
  }

  return (
    <div className='container'>
      <div className="dflex justify-content-between align-items-center">
        <div className="h3">Display To Do</div>
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
              todos.data?.map((todo, index) => (
                <tr key={todo.id} className='align-middle'>
                  <td>{index + 1}</td>
                  <td>{todo.name}</td>
                  <td>{todo.description}</td>
                  <td>{todo.created_at}</td>
                  <td>
                    <Link to={`/edit/${todo.id}`} className='btn btn-success m-2'>Edit</Link>
                    <a className='btn btn-danger m-2' onClick={() => deleteTodo(todo.id)}>Delete</a>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
        <div className="d-flex justify-content-end">
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              {todos.links?.map(link=>(
                <li onClick={()=>paginatePage(link.url)} style={{cursor:'pointer'}} className={`page-item ${link.active?'active':''}`}><a className="page-link">{link.label.replace('&laquo;', '<').replace('&raquo;', '>')}</a></li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Task