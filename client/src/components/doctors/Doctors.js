import { useState, useEffect } from 'react';
import axios from 'axios';
import DoctorList from './DoctorList';
import DoctorForm from './DoctorForm';
import { Modal, Button } from 'react-bootstrap';

const Doctors = () => {
  const [doctors, setDoctors] = useState([])
  const [adding, setAdd] = useState(false)

  useEffect( () => {
    axios.get('/api/doctors')
      .then( res => setDoctors(res.data))
      .catch( err => console.log(err))
  }, [])

  const addDoctor = (doctor) => {
    axios.post('/api/doctors', { doctor })
      .then( res => setDoctors([...doctors, res.data]))
      .catch( err => console.log(err))
  }

  return (
    <>
      <Button onClick={() => setAdd(true)}>
        +
      </Button>

      <Modal show={adding} onHide={() => setAdd(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Create Doctor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DoctorForm
            addDoctor={addDoctor}
            setAdd={setAdd}
          />
        </Modal.Body>
      </Modal>
      <h1>All Doctors</h1>
      <DoctorList 
        doctors={doctors} 
      />
    </>
  )
}

export default Doctors;