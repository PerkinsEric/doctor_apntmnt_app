import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UserList from '../users/UserList';

const DoctorShow = ({ updateDoctor, deleteDoctor}) => {
  const { id } = useParams()
  const [doctor, setDoctor] = useState({ first_name: '', last_name: '', specialty: '' })
  const [doctorUsers, setDoctorUsers] = useState([])

  useEffect( () => {
    axios.get(`/api/doctors/${id}`)
      .then( res => setDoctor(res.data))
      .catch( err => console.log(err) )

    axios.get(`/api/${id}/doctorUsers`)  
      .then( res => setDoctorUsers(res.data))
      .catch( err => console.log(err) )  
  }, [])

  const { first_name, last_name, specialty } = doctor
  return (
    <>
      <h1>{first_name}</h1>
      <h2>{last_name}</h2>
      <p>{specialty}</p>
      <Button variant="warning">
        Edit
      </Button>
      <Link 
        to={`/${id}/appointments`}
        state={{ doctorName: first_name }}
      > 
        <Button variant="success">
          Appointments
        </Button>
      </Link>
      <Button variant="danger">
        Delete
      </Button>
      <br />
      <h1>All users seeing this doctor</h1>
      <UserList users={doctorUsers} />
    </>
  )
}

export default DoctorShow;