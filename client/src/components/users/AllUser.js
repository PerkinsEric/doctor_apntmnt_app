import UserShow from './UserShow';

const AllUser = ({ users, updateUser, deleteUser }) => (
  <>
    {
      users.map( u => 
        <UserShow
          key={u.id}
          // id={l.id} title={l.title} desc={l.desc}
          {...u}
          updateUser={updateUser}
          deleteUser={deleteUser}
        />
      )
    }
  </>
)

export default AllUser;