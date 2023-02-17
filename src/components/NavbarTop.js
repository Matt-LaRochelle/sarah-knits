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
    <div className="nav-bar nav-pink">
      <div className="nav-bar-title">
        <img src="./cat.png" alt="cat with ball of yarn" className="nav-bar-img"/>
        <p className="t1">Sarah's</p><p className="t2">Knitting</p> <p className="t3">Corner</p>
      </div>
      <div className="nav-bar-link">
        About
      </div>
      <div className="nav-bar-link">
        Contact
      </div>
      <div className="nav-bar-link">
        Cart
      </div>
    </div>
  );
};

export default NavbarTop;
export {homeClick, aboutClick, contactClick};