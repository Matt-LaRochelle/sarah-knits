import React from "react";
import styles from "./Footer.module.css";

var year = new Date().getFullYear();


function Footer() {
    return (
        <footer className={styles.footer}>
                <p>Copyright © {year}</p>
        </footer>
    );
}


export default Footer;