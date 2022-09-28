import { Container, ListGroup } from 'react-bootstrap';
import AppointmentShow from './AppointmentShow';

const AppointmentList = ({ appointments, updateAppointment, unappointedUsers }) => (
  <Container>
    <ListGroup variant="flush">
      { appointments.map( a => 
        <AppointmentShow 
          key={a.id}
          {...a}
          updateAppointment={updateAppointment}
          unappointedUsers={unappointedUsers}
        />
      )}
    </ListGroup>
  </Container>
)

export default AppointmentList;