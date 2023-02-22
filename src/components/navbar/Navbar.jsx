import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import {AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';



function homeClick() {
  console.log("Clicked Home")
}

function aboutClick() {
  console.log("Clicked About")
}

function contactClick() {
  console.log("Clicked Contact")
}


  


function Navbar() {

  const [nav, setNav] = useState(false);

  return (
    <header className={styles.navbar}>
      <Link to="/kitty"><img src="./cat.png" className={styles.image} alt="cat with yarn"></img></Link>
      <nav>
        <ul className={nav ? [styles.menu, styles.active].join(' ') : [styles.menu]}>
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
      </nav>
      <div onClick={()=> setNav(!nav)} className={styles.mobile_btn}>
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}   
      </div>
    </header>
  );
};

export default Navbar;