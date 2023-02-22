import React from "react";
import styles from "./Footer.module.css";

var year = new Date().getFullYear();


function Footer() {
    return (
        <footer className={styles.footer}>
                <p className={styles.content}>Copyright © {year}</p>
        </footer>
    );
}


export default Footer;