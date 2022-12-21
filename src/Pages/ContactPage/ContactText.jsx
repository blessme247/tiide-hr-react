import React from "react";
import ContactIcon from "../../Assets/icons/contact1.svg";
import styles from "./contact.module.css";


const ContactText = () => {
    return (
      <>
    <div className={styles.text} >
      <h4>CONTACT</h4>
      <h1>How can we help?</h1>
      <p>We're here to help and answer any question you might have, We look forward 
        to hearing from you. <span> 🙂</span></p>
      <img className={styles.contactIcon} src={ContactIcon} style={{width: 604, height: 428}} alt='contact icon' />
    </div>
    

      </>
        );
    };
    
    export default ContactText;

   