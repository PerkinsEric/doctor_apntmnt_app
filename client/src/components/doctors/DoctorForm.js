import { useState } from "react";
import { Form, Button } from 'react-bootstrap';

const DoctorForm = ({ addDoctor, setAdd }) => {
  const [doctor, setDoctor] = useState({ first_name: '', last_name: '', specialty: '' })

  const handleSubmit = (e) => {
    e.preventDefault();
    addDoctor(doctor)
    setAdd(false)
    setDoctor({ first_name: '', last_name: '', specialty: '' })
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control 
            name='name'
            value={doctor.name}
            onChange={(e) => setDoctor({ ...doctor, name: e.target.value })}
            required
            placeholder="name"
          />
        </Form.Group>
        {/* <Form.Group className="mb-3">
          <Form.Label>Specialty</Form.Label>
          <Form.Control 
            name='specialty'
            value={doctor.specialty}
            onChange={(e) => setDoctor({ ...doctor, specialty: e.target.value })}
            required
            as="textarea" 
            rows={3}
          />
        </Form.Group> */}
        {/* <Form.Group className="mb-3">
          <Form.Label>doctor type</Form.Label>
          <Form.Control 
            name='ctype'
            value={doctor.ctype}
            onChange={(e) => setdoctor({ ...doctor, ctype: e.target.value })}
            required
          />
        </Form.Group> */}
        <Form.Group className="mb-3">
          <Form.Label>Doctor Specialty</Form.Label>
          <Form.Select
            name='specialty'
            value={doctor.specialty}
            onChange={(e) => setDoctor({ ...doctor, specialty: e.target.value })}
            required
          >
            <option>Open this select menu</option>
            <option value="Oncology">Oncology</option>
            <option value="Radiology">Radiology</option>
            <option value="Gastrology">Gastrology</option>
          </Form.Select>
        </Form.Group>
        <Button type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

export default DoctorForm;