import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarTop from './components/NavbarTop.js';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';




ReactDOM.render(
  <div>
  <NavbarTop />
  <About />
  <Contact />


  </div>,
  document.getElementById("root")
);