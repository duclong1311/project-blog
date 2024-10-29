import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

const Header = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/login');
    };
    const isAuthenticated = useSelector(state => state.user.isAuthenticated);

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <NavLink to='/' className='navbar-brand'>CodeGym-Blog</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to='/' className='nav-link'>Home</NavLink>
                        {isAuthenticated === true ?
                            <>
                                <NavLink to='admins' className='nav-link'>Admin</NavLink>
                                <NavLink to='users' className='nav-link'>User</NavLink>
                            </>
                            :
                            <NavLink className='nav-link'></NavLink>
                        }
                    </Nav>
                    <Nav>
                        {isAuthenticated === false ?
                            <>
                                <button className='btn-login' onClick={() => handleLogin()}>Log in</button>
                                <button className='btn-signup'>Sign up</button>
                            </>
                            :
                            <NavDropdown title="Settings" id="basic-nav-dropdown">
                                <NavDropdown.Item as={NavLink} to="my-profile">Profile</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to="my-posts">My posts</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Log out</NavDropdown.Item>
                            </NavDropdown>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;