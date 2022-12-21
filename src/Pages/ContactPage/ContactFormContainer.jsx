import React from "react";
import styles from "./contact.module.css";
import ContactForm from "./ContactForm";
import ContactText from "./ContactText";

const ContactFormContainer = () => {
  return (
    <>
      <main
        className={`${styles.heroSection}  ${styles.mainContent} ${styles.container} `}
      >
        <span className={styles.bigCircle} />
        <div className={`${styles.hero} ${styles.container} `}>
          <ContactText />

          <ContactForm />
        </div>
      </main>
    </>
  );
};

export default ContactFormContainer;
