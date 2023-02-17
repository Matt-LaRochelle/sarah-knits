import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function homeClick() {
  // if (navHome === true) {
  //   navHome === false;
  // } else {
  //   navHome === true;
  // }
  // return navHome;
  console.log("Clicked Home")
}

function aboutClick() {
  // if (navAbout === true) {
  //   navAbout === false;
  // } else {
  //   navAbout === true;
  // }
  // return navAbout;
  console.log("Clicked About")
}

function contactClick() {
  // if (navContact === true) {
  //   navContact === false;
  // } else {
  //   navContact === true;
  // }
  // return navContact;
  console.log("Clicked Contact")
}



function NavbarTop() {
  return (
    <Navbar bg="myRed" expand="lg">
      <Container>
        <Navbar.Brand href="#home" onClick={homeClick}>
          <img src="../cat.png" alt="cat with yarn" className="navimg"></img>
          <p className="nav-title t1" >Sarah's</p><p className="nav-title t2">Knitting</p><p className="nav-title t3">Corner</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="nav-text" href="#about" onClick={aboutClick}>About Me</Nav.Link>
            <Nav.Link className="nav-text" href="#link" onClick={contactClick}>Contact</Nav.Link>
            <Nav.Link className="nav-text" href="#cart">Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarTop;
export {homeClick, aboutClick, contactClick};