import { ListGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const UserList = ({ users }) => (
  <>
    <ListGroup variant='flush'>
      { users.map( u =>
        <ListGroup.Item key={u.id}>
          {u.first_name} {u.last_name} {u.age} {u.gender} {u.phone_number}
          <Link to={`/users/${u.id}`}>
            <Button>Show</Button>
          </Link>
        </ListGroup.Item>
      ) }
    </ListGroup>
  </>
)

export default UserList;