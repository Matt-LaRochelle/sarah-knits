import React from "react";
import styles from "./Footer.module.css";

var year = new Date().getFullYear();


function Footer() {
    return (
        <div className={styles.footer}>
                <p className={styles.content}>Copyright © {year}</p>
        </div>
    );
}


export default Footer;