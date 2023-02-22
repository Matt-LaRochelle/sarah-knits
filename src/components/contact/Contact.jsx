import React from "react";
import styles from "./Contact.module.css";

function Contact() {
    return (
        <div>
        <h2 className={styles.title}>Contact Me</h2>
        <p className={styles.content}>Have any suggestions? Feel free to send me a message!</p>
        <form className={styles.inputText}>
            <input type="text" placeholder="Hey there! I was thinking..."></input>
            <br></br>
            <button type="submit">Submit</button>
        </form>
        <div className={styles.socials}>
            <h2 className={styles.title}>Follow me on social media</h2>
            <div className={styles.socials_container}>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-twitter"></i>
            </div>
            
        </div>
        </div>
    );
};

export default Contact;