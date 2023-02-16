import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// function homeClick() {
//   navHome != prevValue;
// }

// onClick={homeClick}

function NavbarTop() {
  return (
    <Navbar bg="myRed" expand="lg">
      <Container>
        <Navbar.Brand className="nav-text" href="#home" >
          <img src=".../public/cat.png" alt="cat with yarn"></img>
          Sarah's Knitting Corner
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="nav-text" href="#about">About Me</Nav.Link>
            <Nav.Link className="nav-text" href="#link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarTop;