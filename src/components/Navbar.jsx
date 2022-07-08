import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../Context';
import { useContext, useEffect } from 'react';

const Navbar = () => {

    const navigate = useNavigate();

    const logout = () => {
        setLogin(null);
        navigate("/login");
      };

    const { login, setLogin } = useContext(AppContext);

    return (
        <nav>
            <h1>Logo</h1>
            <ul className="navbar">
                {login ? (
                    <>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/add">Add</Link>
                        </li>
                        <li>
                            <span style={{ cursor: "pointer" }} onClick={logout}>
                                Log out
                            </span>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
}

export default Navbar;