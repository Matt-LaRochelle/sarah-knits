import React from "react";
import Navbar from './components/navbar/Navbar';
import About from './components/about/About.jsx';
import Contact from './components/Contact.jsx';
import Home from './components/Home.jsx';
import Kitty from './components/Kitty.jsx';
import Cart from './components/Cart.jsx';
import Footer from './components/Footer.jsx';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    {/* <Route path="/kitty">
                        <Kitty />
                    </Route> */}
                    {/* <Route exact path="/">
                        <Home />
                    </Route> */}
                    <Route path="/about">
                        <About />
                    </Route>
                    {/* <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/cart">
                        <Cart /> */}
                    {/* </Route> */}
                </Switch>
                {/* <Footer /> */}
            </div>
        </Router>
    );
};

export default App;