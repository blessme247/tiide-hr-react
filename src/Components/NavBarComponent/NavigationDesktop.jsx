import React from 'react'
import styles from "./navbar.module.css";
import { Link } from 'react-router-dom'

const NavigationDesktop = () => {
  return (
    <>

            <ul className={`${styles.navigation} ${styles.navigationDesktop}`}>
              <div className={styles.navCenter}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </div>
              <div className={styles.navRight}>
                <Link to="/signin" className={styles.signIn}>
                  Sign In </Link>
                <Link to="/signup" className={styles.signUp}>
                  Sign Up </Link >
              </div>
            </ul>

    </>
  )
}

export default NavigationDesktop