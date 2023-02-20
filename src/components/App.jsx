import React from "react";
import NavbarTop from './NavbarTop.js';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Home from './Home.jsx';
import Kitty from './Kitty.jsx';
import Cart from './Cart.jsx';
import Footer from './Footer.jsx';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
    return (
        <Router>
            <div>
                <NavbarTop />
                <Switch>
                    <Route path="/kitty">
                        <Kitty />
                    </Route>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/cart">
                        <Cart />
                    </Route>
                </Switch>
                <Footer />
            </div>
        </Router>
    );
};

export default App;