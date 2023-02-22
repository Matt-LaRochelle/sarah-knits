import React from "react";
import styles from "./Footer.module.css";

var year = new Date().getFullYear();


function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <p className={styles.content}>Copyright © {year}</p>
            </div>
        </div>
    );
}


export default Footer;