import { useState, useEffect } from 'react';

const UserForm = ({ addUser, id, first_name, last_name, age, gender, phone_number, updateUser, setEdit }) => {
  const [user, setUser] = useState({ first_name: '', last_name: '', age: '', gender: '', phone_number: '' })

  useEffect( () => {
    if (id) {
      setUser({ first_name, last_name, age, gender, phone_number })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateUser(id, user)
      setEdit(false)
    } else {
      addUser(user)
    }
    setWorker({ first_name: '', last_name: '', age: '', gender: '', phone_number: '' })
  }

  return (
    <>
      <h1>{ id ? 'Edit' : 'Create'} User</h1>
      <form onSubmit={handleSubmit}>
        <input 
          name='first_name'
          value={user.first_name}
          onChange={(e) => setUser({ ...user, first_name: e.target.value })}
          required
          placeholder='First name'
        />
        <textarea
          name='last_name'
          value={user.last_name}
          onChange={(e) => setUser({ ...user, last_name: e.target.value })}
          required
          placeholder='Last name'
        ></textarea>
        <textarea
          name='phone_number'
          value={user.phone_number}
          onChange={(e) => setUser({ ...user, last_name: e.target.value })}
          required
          placeholder='Phone#'
        ></textarea>
        <textarea
          name='age'
          value={user.age}
          onChange={(e) => setUser({ ...user, position: e.target.value })}
          required
          placeholder='Age'
        ></textarea>
        <select
          name='gender'
          value={user.age}
          onChange={(e) => setUser({ ...user, position: e.target.value })}
          required
          placeholder='Gender'
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default UserForm;