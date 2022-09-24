import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DoctorList = ({ doctors }) => (
  <Container>
    <Row md='4' sm='12'>
      { doctors.map( d =>
        <Col key={d.id}>
          <Card style={{ width: '10rem' }}>
            <Card.Body>
              <Card.Title>{d.first_name}</Card.Title>
              <Card.Text>
                {d.last_name}
                {d.specialty}
              </Card.Text>
              <Link to={`/doctors/${d.id}`}>
                <Button>Show</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      )}
    </Row>
  </Container>
)

export default CourseList;