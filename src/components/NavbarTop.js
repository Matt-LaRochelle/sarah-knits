import React from 'react';



function homeClick() {
  // if (navHome === true) {
  //   navHome === false;
  // } else {
  //   navHome === true;
  // }
  // return navHome;
  console.log("Clicked Home")
}

function aboutClick() {
  // if (navAbout === true) {
  //   navAbout === false;
  // } else {
  //   navAbout === true;
  // }
  // return navAbout;
  console.log("Clicked About")
}

function contactClick() {
  // if (navContact === true) {
  //   navContact === false;
  // } else {
  //   navContact === true;
  // }
  // return navContact;
  console.log("Clicked Contact")
}



function NavbarTop() {
  return (
    <header>
      <nav>
      <ul class="nav-list nav-pink">
          <li>
            <img src="./cat.png" alt="cat with ball of yarn" className="nav-image"/>
            Sarah's Knitting Corner
          </li>
          <li>
            About
          </li>
          <li>
            Contact
          </li>
          <li>
            Cart
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavbarTop;
export {homeClick, aboutClick, contactClick};