import { useState, useEffect } from 'react';
import axios from 'axios';
import UserForm from './UserForm';
import AllUser from './AllUser';

const Users = () => {
  const [users, setUsers] = useState([])

  useEffect( () => {
    axios.get('/api/users')
      .then( res => setUsers(res.data))
      .catch( err => console.log(err))
  }, [])

  const addUser = (users) => {
    axios.post('/api/users', { user })
      .then( res => setUsers([...users, res.data]))
      .catch( err => console.log(err))
  }

  const updateUser = (id, user) => {
    axios.put(`/api/users/${id}`, { users })
      .then( res => {
        const newUpdatedUsers = users.map( u => {
          if (u.id === id) {
            return res.data
          }
          return u
        })
        setUsers(newUpdatedUsers)
      })
      .catch( err => console.log(err))
  }

  const deleteUser = (id) => {
    axios.delete(`/api/users/${id}`)
      .then( res => {
        setUsers(users.filter( u => u.id !== id))
      })
      .catch( err => console.log(err))
  }

  return (
    <>
      <UserForm addUser={addUser} />
      <h1>All Users</h1>
      <AllUser
        users={users}
        updateUser={updateUser}
        deleteUser={deleteUser}
      />
    </>
  )
}

export default Users;