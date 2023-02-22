import React from "react";
import styles from "./Contact.module.css";

function Contact() {
    return (
        <div>
        <h2 className={styles.title}>Contact Me</h2>
        <p classNmae={styles.content}>Have any suggestions? Feel free to send me a message!</p>
        <form className={styles.inputText}>
            <input type="text" placeholder="Hello!"></input>
            <button type="submit">Submit</button>
        </form>
        </div>
    );
};

export default Contact;