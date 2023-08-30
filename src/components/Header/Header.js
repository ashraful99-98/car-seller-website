import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
// import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../image/download.png';
import './Header.css';


const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark">
                <Container>
                    <Image src={logo} className="logo" />
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto ">
                            <Nav.Link href="/home" className="text-white">Home</Nav.Link>
                            <Nav.Link href="/post" className="text-white">Post</Nav.Link>
                            <Nav.Link href="/videosPictures" className="text-white">Video&Picture</Nav.Link>
                            <Nav.Link href="/inventory" className="text-white">Inventory</Nav.Link>

                            {user.email && <span style={{ color: 'white' }}>Hello {user.displayName} </span>}
                            {
                                user.email ?
                                    <button onClick={logOut}>log out</button>
                                    :
                                    <Nav.Link className="nav-link text-white " href="/login">Login</Nav.Link>}
                        </Nav>
                        <Nav>
                            <Nav.Link className=" post-btn text-white rounded" href="/login">Sign In</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;