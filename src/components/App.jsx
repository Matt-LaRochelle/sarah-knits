import React from "react";
import NavbarTop from './NavbarTop.js';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Home from './Home.jsx';
import Footer from './Footer.jsx';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
    return (
        <Router>
            <div>
                <NavbarTop />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route>
                        <Contact />
                    </Route>
                </Switch>
                <Footer />
            </div>
        </Router>
    );
};

export default App;