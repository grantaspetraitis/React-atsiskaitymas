import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <h1>Logo</h1>
            <ul className="navbar">
                <li>
                    <Link to='/login'>Login</Link>
                </li>
                <li>
                    <Link to='/register'>Register</Link>
                </li>
            </ul>
        </nav>
    );
}
 
export default Navbar;