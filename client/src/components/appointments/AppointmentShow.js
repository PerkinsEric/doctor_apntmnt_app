import { useState, useEffect } from 'react';
import axios from 'axios';
import { ListGroup, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import AppointForm from './AppointmentForm';

const AppointmentShow = ({ id, course_id, user_id, updateAppointment, unappointedUsers }) => {
  const [user, setUser] = useState({ first_name: '' , last_name: '' })
  const { courseId } = useParams()
  const [editing, setEdit] = useState(false)

  useEffect( () => {
    axios.get(`/api/users/${user_id}`)
      .then( res => setUser( res.data ))
      .catch( err => console.log(err))
  }, [])

  const { first_name, last_name } = user
  const fullName = first_name + ' ' + last_name
  return (
    <>
      { editing ?
        <>
          <AppointmentForm 
            id={id}
            user_id={id}
            updateAppointment={updateAppointment}
            setEdit={setEdit}
            unappointededUsers={unappointedUsers}
          />
          <Button 
            variant='warning'
            onClick={() => setEdit(false)}
          >
            Cancel
          </Button>
        </>
        :
        <ListGroup.Item>
          {fullName}
          <Button 
            variant='warning'
            onClick={() => setEdit(true)}
          >
            Edit
          </Button>
          <Button variant='danger'>Delete</Button>
        </ListGroup.Item>
      }
    </>
  )
}

export default AppointmentShow;