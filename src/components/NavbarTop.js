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
      <nav className="nav-pink">
        <div className="nav-corner">
          <img src="./cat.png" alt="cat with ball of yarn" className="nav-image"/>
          <h2 className="nav-title">Sarah's Knitting Corner</h2>
        </div>
        <div className="nav-items">
          <ul class="nav-list">
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
        </div>
      </nav>
    </header>
  );
};

export default NavbarTop;
export {homeClick, aboutClick, contactClick};