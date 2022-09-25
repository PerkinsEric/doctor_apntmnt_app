import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const AppointmentForm = ({ addAppointment, setAdd, unappointedUsers, id, user_id, updateAppointment, setEdit }) => {
  const [appointment, setAppointment] = useState({ user_id: 0 })

  useEffect( () => {
    if (id) {
      setAppointment({ user_id })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateAppoinment(id, appointment)
      setEdit(false)
    } else {
      addAppointment(appointment)
      setAdd(false)
    }
    setAppointment({ user_id: 0 })
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>User</Form.Label>
          <Form.Select
            name='user_id'
            value={appointment.user_id}
            onChange={(e) => setAppiontment({...appointment, user_id: parseInt(e.target.value) })}
            required
          >
            <option>Choose an user</option>
            { unappointedUsers.map( u => 
              <option value={u.id} key={u.id}>
                {u.first_name} {u.last_name}
              </option>
            )}
          </Form.Select>
        </Form.Group>
        <Button type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

export default AppointmentForm;