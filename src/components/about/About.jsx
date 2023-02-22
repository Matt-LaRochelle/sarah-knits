import React from "react";
import styles from "./About.module.css";
import image from "./stick_figure.jpg"

// var isAbout = false;



function About() {
    return (
        <div>
            <h2 className={styles.title}>About Me</h2>
            <div className={styles.container}>
            <p className={styles.content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div className={styles.image_container}>
                <img src={image} alt="stick figure drawing" className={styles.image}/>
            </div>
            </div>
        </div>
    );
};

export default About;