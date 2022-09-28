import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const UserForm = ({ addUser, setAdd, id, first_name, last_name, age, gender, phone_number, updateUser, setEdit }) => {
  const [user, setUser] = useState({ first_name: '', last_name: '', age: '', gender: '', phone_number: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateUser(id, user)
      setEdit(false)
    } else {
      addUser(user)
      setAdd(false)
    }
    setUser({ first_name: '', last_name: '', age: '', gender: '', phone_number: '' })
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control 
            name='first_name'
            value={user.first_name}
            onChange={(e) => setUser({...user, first_name: e.target.value })}
            placeholder="first name" 
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control 
            name='last_name'
            value={user.last_name}
            onChange={(e) => setUser({...user, last_name: e.target.value })}
            placeholder="last name" 
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Age</Form.Label>
          <Form.Control 
            name='age'
            value={user.age}
            onChange={(e) => setUser({...user, age: e.target.value })}
            placeholder="age" 
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Gender</Form.Label>
          <Form.Control 
            name='gender'
            value={user.gender}
            onChange={(e) => setUser({...user, gender: e.target.value })}
            placeholder="gender" 
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Age</Form.Label>
          <Form.Control 
            name='age'
            value={user.phone_number}
            onChange={(e) => setUser({...user, phone_number: e.target.value })}
            placeholder="phone number" 
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

export default UserForm;