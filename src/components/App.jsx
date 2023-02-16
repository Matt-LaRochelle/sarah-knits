import React from "react";
import NavbarTop from './NavbarTop.js';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Home from './Home.jsx';

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
        </div>);
};

export default App;