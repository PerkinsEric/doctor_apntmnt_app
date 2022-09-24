import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/home/Home';
import Nomatch from './components/shared/Nomatch';
import MainNavbar from './components/shared/MainNavbar';
import Footer from './components/shared/Footer';
import Users from './components/users/Users';
import UserShow from './components/users/UserShow';
import Doctors from './components/doctors/Doctors';
import DoctorShow from './components/doctors/DoctorShow';
// import Appointments from './components/appointments/Appointments';

const App = () => (
  <>
    <MainNavbar />
    <Routes>

    <Route path='/' element={ <Home /> } />
      <Route path='/users' element={ <Users /> } />
      <Route path='/users/:id' element={ <UserShow /> } />
      <Route path='/doctors' element={ <Doctors /> } />
      <Route path='/doctors/:id' element={ <DoctorShow /> } />
      {/* <Route path='/:courseId/appointments' element={ <Appointments /> } /> */}
      <Route path='/*' element={ <Nomatch /> } />

    </Routes>
    <Footer />
  </>
)

export default App;


export default App;