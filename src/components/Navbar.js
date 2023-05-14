import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../styles/Nav.css'


const Navigation = ({ currentPage, handlePageChange }) => {
  return (
    <Navbar className="bar"bg="success" expand="lg" variant="dark">
      <Navbar.Brand className="brand" href="#home">Tanner Tieman</Navbar.Brand>
      <Navbar.Toggle className="toggle" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="collapse" id="basic-navbar-nav">
        <Nav className=" link-list">
          <Nav.Link className="link" href="#about-me" onClick={() => handlePageChange('AboutMe')} active={currentPage === 'AboutMe'}>About Me</Nav.Link>
          <Nav.Link className="link" href="#projects" onClick={() => handlePageChange('Portfolio')} active={currentPage === 'Portfolio'}>Portfolio</Nav.Link>
          <Nav.Link className="link" href="#blog" onClick={() => handlePageChange('Contact')} active={currentPage === 'Contact'}>Contact</Nav.Link>
          <Nav.Link className="link" href="#resume" onClick={() => handlePageChange('Resume')} active={currentPage === 'Resume'}>Resume</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;