import { Container, ListGroup } from 'react-bootstrap';
import AppointmentShow from './AppointmentShow';

const AppointmentList = ({ appoinments, updateAppoinment, unappointededUsers }) => (
  <Container>
    <ListGroup variant="flush">
      { appointments.map( e => 
        <AppointmentShow 
          key={e.id}
          {...e}
          updateAppointment={updateAppointment}
          unappointedUsers={unappointedUsers}
        />
      )}
    </ListGroup>
  </Container>
)

export default AppointmentList;