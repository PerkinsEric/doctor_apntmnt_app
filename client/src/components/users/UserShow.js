import { useParams } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Image, Button } from "react-bootstrap";
//import AppointmentList from '../appointments/AppontmentList';
import { UserConsumer } from "../../providers/UserProvider";
import UserForm from "./UserForm";

const UserShow = ({ updateUser, deleteUser }) => {
  const [user, setUser] = useState({ first_name: '', last_name: '', age: '', gender: '', phone_number: '' })
  const { id } = useParams()
  const [userCourses, setUserCourses] = useState([])
  const [editing, setEdit] = useState(false)

  useEffect( () => {
    axios.get(`/api/users/${id}`)
      .then( res => setUser(res.data) )
      .catch( err => console.log(err) )

    axios.get(`/api/${id}/userAppontments`)
      .then( res => setUserCourses(res.data) )
      .catch( err => console.log(err) )
  }, [])

  const { first_name, last_name, age, gender, phone_number } = user
  return (
    <>
      { editing ?
        <>
          <UserForm
            id={id}
            first_name={first_name}
            last_name={last_name}
            age={age}
            gender={gender}
            phone_number={phone_number}
            updateUser={updateUser}
            setEdit={setEdit}
          />
          <Button 
            variant="warning"
            onClick={() => setEdit(false)}
          >
            Cancel
          </Button>
        </>
        :
        <>
          <h1>{first_name} {last_name} {age} {gender} {phone_number}</h1>
          <Image 
            alt={first_name}
            width='300'
          />
          <Button 
            variant="warning"
            onClick={() => setEdit(true)}
          >
            Edit
          </Button>
          <Button 
            variant="danger"
            onClick={() => deleteUser(id)}
          >
            Delete
          </Button>
          <br />
          <h1>All appoinments set for user</h1>
          {/*<AppointmentList courses={userAppointments} />*/}
        </>
      }
    </>
  )
}

const ConnectedUserShow = (props) => (
  <UserConsumer>
    { value => <UserShow {...value} {...props} />}
  </UserConsumer>
)

export default ConnectedUserShow;