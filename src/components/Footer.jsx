import React from "react";

var year = new Date().getFullYear();


function Footer() {
    return (
    <div>
    <p className="copyright">Copyright © {year}</p>
    </div>
    );
}


export default Footer;