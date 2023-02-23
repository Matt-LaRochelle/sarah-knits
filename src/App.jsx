import React, { useState } from "react";
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import Kitty from './components/kitty/Kitty';
import Cart from './components/cart/Cart';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {

    const [cartItems, setCartItems] = useState([]);

    const handleAddProduct = (product) => {
        const ProductExist = cartItems.find((item) => item.id === product.id);
        if (ProductExist) {
            setCartItems(
                cartItems.map((item) =>
                item.id === product.id
                    ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
                    : item
            )
            );
        } else {
            setCartItems([...cartItems, {...product, quantity: 1}]);
        }
    };

    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route path="/kitty">
                        <Kitty />
                    </Route>
                    <Route exact path="/">
                        <Home 
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
                        /> 
                    </Route>
                </Switch>
                <Footer />
            </div>
        </Router>
    );
};

export default App;