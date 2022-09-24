import { Link } from 'react-router-dom';

const MainNavbar = () => (
    <nav>
        <ul>
            <Link to='/'>
                <li>Home</li>
            </Link>
            <Link to='/users'>
                <li>Team</li>
            </Link>
        </ul>
    </nav>
)

export default MainNavbar;