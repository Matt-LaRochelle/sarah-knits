import React from "react";
import NavbarTop, { homeClick, aboutClick, contactClick } from './NavbarTop.js';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Home from './Home.jsx';
import Footer from './Footer.jsx';

var navAbout = false;
var navContact = false;
var navHome = true;


function App() {
    return (<div>
        <NavbarTop />{
            navAbout === true && <About />
        }
        {
            navContact === true && <Contact />
        }
        {
            navHome === true && <Home />
        }
        <Footer />
        </div>);
};

export default App;