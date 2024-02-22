import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Check if the user is not logged in when the component mounts
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      navigate('/login');
    }
  
    // Add event listener to handle logout event in other tabs
    const handleStorageChange = (event) => {
      if (event.key === 'isLoggedIn' && event.newValue === null) {
        navigate('/login');
      }
    };
  
    window.addEventListener('storage', handleStorageChange);
  
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn'); // Remove login status from local storage
    // Broadcast the logout event to all tabs
    localStorage.setItem('logout', Date.now().toString());
    navigate('/login'); // Redirect to login page
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu state
  };

  if (location.pathname !== '/login') {
    return (
      <>
        <Navbar expand="lg" className='header-wrapper'>
          <Container>
            <Link to="/">
              <Navbar.Brand>
                <b className='logo_design'>Design<span>AD.</span></b>
              </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="navbarScroll" className={isMenuOpen ? 'active' : ''} onClick={toggleMenu}>
              <div className="hamburger" id="hamburger">
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
              </div>
            </Navbar.Toggle>
            <Navbar.Collapse className='gap-5' id="navbarScroll">
              <Nav className="my-2 my-lg-0 head-nav" style={{ maxHeight: '100px', marginLeft:'auto' }} navbarScroll>
                <NavLink className='nav-link' to="/">Home</NavLink>
                <NavLink className='nav-link' to="/about">About</NavLink>
                <NavLink className='nav-link' to="/blog">Blog</NavLink>
                <NavLink className='nav-link' to="/service">Service</NavLink>
                <NavLink className='nav-link' to="/contact">Contact</NavLink>
              </Nav>
              <button className='logout-btn lets_talk' onClick={handleLogout}>Logout <div className='circle'><IoIosArrowForward /></div></button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    )
  }

  // Return null if the current route is the login page
  return null;
}

export default Header;
