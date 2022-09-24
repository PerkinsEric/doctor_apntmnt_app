import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/home/Home';
import Users from './components/users/Users'
import NoMatch from './components/shared/NoMatch';

const App = () => (
  <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/users' element={<Users />} />
      <Route path='/*' element={<NoMatch />} />
    </Routes>
  </>
)

export default App;

