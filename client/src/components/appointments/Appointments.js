import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import AppointmentList from './appointments/AppointmentList';
import { useLocation } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import AppointmentForm from '.appoinments/ApppointmentForm';

const Appointments = ({}) => {
  const { appointmentId } = useParams()
  const [appointments, setAppointments] = useState([])
  const location = useLocation()
  const { appointmentTitle } = location.state
  const [adding, setAdd] = useState(false)
  const [unappointededUsers, setUsers] = useState([])
  const navigate = useNavigate()

  useEffect( () => {
    axios.get(`/api/courses/${appointmentId}/appointments`)
      .then( res => setAppointments(res.data))
      .catch( err => console.log(err))

    axios.get(`/api/courses/${appointmentId}/unappointed`)
      .then( res => setUsers(res.data))
      .catch( err => console.log(err))
  }, [])

  const addAppointment = (appointment) => {
    axios.post(`/api/appointments/${appointmentId}/appointments`, { appointment })
      .then( res => setAppointments([...appointments, res.data]))
      .catch( err => console.log(err))
  }

  const updateAppointment = (id, appointment) => {
    axios.put(`/api/appointments/${appointmentId}/appointments/${id}`, { appointment })
      .then( res => {
        const newUpdatedAppointments = appointments.map( e => {
          if (e.id == id) {
            return res.data
          }
          return e
        })
        setAppointments(newUpdatedAppointments)
        // navigate(`/${courseId}/appointments`, { state: { courseTitle } })
        window.location.reload()
      })
      .catch( err => console.log(err))
  }

  return (
    <>
      <Button onClick={() => setAdd(true)}>
        +
      </Button>

      <Modal show={adding} onHide={() => setAdd(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Appoint a user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AppointmentForm 
            addAppointment={addAppointment}
            unappointedUsers={unappointedUsers}
            setAdd={setAdd}
          />
        </Modal.Body>
      </Modal>
      <h1>All Appointments for the course {appointmentTitle}</h1>
      <AppointmentList 
        appointments={appointments}
        updateAppointments={updateAppointment}
        unAppointedUsers={unappointedUsers}
      />
    </>
  )
}

export default Appointments;