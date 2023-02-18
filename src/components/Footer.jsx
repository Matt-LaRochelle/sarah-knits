import React from "react";

var year = new Date().getFullYear();


function Footer() {
    return (
        <footer className="copyright-footer">
                <p className="copyright">Copyright © {year}</p>
        </footer>
    );
}


export default Footer;