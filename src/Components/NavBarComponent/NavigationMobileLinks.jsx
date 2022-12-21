import React from "react";
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";

const NavigationMobileLinks = () => {
  return (
    <>
      <ul className={`${styles.navigation} ${styles.navigationMobile}`}>
        <li className={styles.listItem}>
          <Link to="/">Home</Link>
        </li>
        <span className={styles.line}> </span>

        <li className={styles.listItem}>
          <Link to="privacy">Privacy Policy</Link>
        </li>
        <span className={styles.line}> </span>

        <li className={styles.listItem}>
          <Link to="/about">About</Link>
        </li>
        <span className={styles.line}> </span>

        <li className={styles.listItem}>
          <Link to="/contact">Contact</Link>
        </li>
        <span className={styles.line}> </span>

        <div className={styles.actionButtons}>
          <li className={styles.listItem}>
            <Link to="/signin" className={styles.signIn}>
              Sign In
            </Link>
          </li>
          {/* <span className={styles.line}> </span> */}
          <li className={styles.listItem}>
            <Link to="/signup" className={styles.signUp}>
              Sign Up
            </Link>
          </li>
        </div>
        <span className={styles.line}> </span>

      </ul>
    </>
  );
};

export default NavigationMobileLinks;
