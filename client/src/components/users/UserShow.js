import { useState } from 'react';
import UserForm from './UserForm';
import { Link } from 'react-router-dom';

const UserShow = ({ id, first_name, last_name, age, gender, phone_number, updateUser, deleteUser }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      { editing ?
        <>
          <UserForm 
            updateUser={updateUser}
            id={id}
            first_name={first_name}
            last_name={last_name}
            age={age}
            gender={gender}
            phone_number={phone_number}
            setEdit={setEdit}
          />
          <button onClick={() => setEdit(false)}>
            Cancel
          </button>
        </>
        :
        <div>
          <h1> {first_name} {last_name} {age} {gender} {phone_number}</h1>
          <button onClick={() => setEdit(true)}>
            Edit
          </button>
          <button onClick={() => deleteUser(id)}>
            Delete
          </button>
          <Link
            to={`/${id}/appointments`} //path of where its going to 
            // id the list id
            state={{ First_name: first_name, Last_Name: last_name, Age: age, Gender: gender, Phone_number: phone_number }}
            // state only read only value to pass to the page
          >
            <button>Appointments</button>
          </Link>
        </div>
      }
      <hr />
    </>
  )
}

export default UserShow;