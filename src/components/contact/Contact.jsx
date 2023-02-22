import React from "react";
import styles from "./Contact.module.css";

function Contact() {
    return (
        <div>
        <h2>Contact Me</h2>
        <p>Have any suggestions? Feel free to send me a message!</p>
        <form className={styles.inputText}>
            <input type="text" placeholder="Hello!"></input>
            <button type="submit">Submit</button>
        </form>
        </div>
    );
};

export default Contact;