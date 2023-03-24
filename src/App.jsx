import React, { useState } from "react";
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import Kitty from './components/kitty/Kitty';
import Cart from './components/cart/Cart';
import Footer from './components/footer/Footer';
import products from './products';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {

    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);
    const [amount, setAmount] = useState(0);
    const data = products;

    function handleAddProduct(id) {
        setCartItems(prevItems => {
            return [...prevItems, id];
        });
        setTotal(total + data[id].description);
        setAmount(cartItems.length + 1);
    }

    function handleDeleteProduct(n) {
        console.log("I got clicked!")
        setTotal(total - data[n].description)
        setCartItems(prevItems => {
            return prevItems.filter((item) => {
                return data[n].id !== n
            });
        }); 
        setAmount(cartItems.length - cartItems.length);
    }

    return (
        <Router>
            <div>
                <Navbar 
                    cartLength={amount}
                />
                <Switch>
                    <Route path="/kitty">
                        <Kitty />
                    </Route>
                    <Route exact path="/">
                        <Home 
                            cartItems={cartItems}
                            handleAddProduct={handleAddProduct}
                        />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/cart">
                        <Cart 
                            cartItems={cartItems}
                            handleAddProduct={handleAddProduct}
                            total={total}
                            handleDeleteProduct={handleDeleteProduct}
                        /> 
                    </Route>
                </Switch>
                <Footer />
            </div>
        </Router>
    );
};

export default App;