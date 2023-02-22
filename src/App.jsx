import React from "react";
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import Kitty from './components/kitty/Kitty';
import Cart from './components/cart/Cart';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
    return (
        <Router>
            <div>
                <Navbar />
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