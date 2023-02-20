import React from 'react';
import { Link } from 'react-router-dom';



function homeClick() {
  console.log("Clicked Home")
}

function aboutClick() {
  console.log("Clicked About")
}

function contactClick() {
  console.log("Clicked Contact")
}



function NavbarTop() {
  return (
    <header>
      <nav className="nav-pink">
        <h1 className="nav-items">
          <ul class="nav-list">
            <li>
              <Link to="/kitty"><img src="./cat.png" className="nav-image" alt="cat with yarn"></img></Link>
            </li>
            <li>
              <Link to="/">Sarah's Knitting Corner</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </h1>
      </nav>
    </header>
  );
};

export default NavbarTop;
export {homeClick, aboutClick, contactClick};