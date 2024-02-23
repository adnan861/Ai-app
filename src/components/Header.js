import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { IoIosArrowForward } from 'react-icons/io';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Redirect to login page if not logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn && location.pathname !== '/login') {
      navigate('/login');
    }
  }, [location.pathname, navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  }; 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {location.pathname !== '/login' && (
        <Navbar expand="lg" className="header-wrapper">
          <Container>
            <Link to="/" className="navbar-brand">
              <b className="logo_design">Design<span>AD.</span></b>
            </Link>
            <Navbar.Toggle
              aria-controls="navbarScroll"
              className={isMenuOpen ? 'active' : ''}
              onClick={toggleMenu}
            >
              <div className="hamburger" id="hamburger">
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
              </div>
            </Navbar.Toggle>
            <Navbar.Collapse className="gap-5" id="navbarScroll">
              <Nav className="my-2 my-lg-0 head-nav" style={{ maxHeight: '100px', marginLeft: 'auto' }} navbarScroll>
                <NavLink className="nav-link" to="/">Home</NavLink>
                <NavLink className="nav-link" to="/about">About</NavLink>
                <NavLink className="nav-link" to="/blog">Blog</NavLink>
                <NavLink className="nav-link" to="/service">Service</NavLink>
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </Nav>
              <button className="logout-btn lets_talk" onClick={handleLogout}>
                Logout <div className="circle"><IoIosArrowForward /></div>
              </button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
    </>
  );
};

export default Header;
