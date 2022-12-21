import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./homepage.module.css";


const CallToAction = () => {
  return (
    <>
    <section className= {`${styles.bottomCta} ${styles.container}`}>
  <div className= {`${styles.bottomCtaContent} ${styles.fullWidth}`}>
    <p className={styles.paragraph}>Everything you need to automate employee workflow</p>
    <Link to ="/signup" className= {`${styles.bottomCtaButton} ${styles.callToAction}`}>Get Started</Link>
  </div>
</section>

    </>
  )
}

export default CallToAction