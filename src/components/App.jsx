import React from "react";
import NavbarTop from './NavbarTop.js';
import About from './About.jsx';
import Contact from './Contact.jsx';

var navAbout = false;


function App() {
    return (<div>
        <NavbarTop />{
            navAbout === true && <About />
        }
        </div>);
};

export default App;