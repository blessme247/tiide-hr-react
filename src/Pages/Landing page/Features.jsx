import React from 'react'
import checkCircle from "../../Assets/icons/check-circle.svg";
import styles from "./homepage.module.css";

const Features = () => {
  return (
    <>
<section className={styles.featuresSection}>
  <div className= {`${styles.features} ${styles.container}`}>
    <div className={`${styles.featuresSectionHead} ${styles.sectionHead}`}>WHY YOU SHOULD CHOOSE TIIDE HR</div>
    <div className={styles.featuresWrapper}>
      <div className={`${styles.feature} ${styles.feature1}`}>
        <img src= {checkCircle} alt="check icon" />
        <p>
          Eliminate the manual processes, saving time and effort. Maintain
          the professional and personal details of the employees and the
          company in a safe and secured manner.
        </p>
      </div>
      <div className= {`${styles.feature} ${styles.feature2}`}>
      <img src= {checkCircle} alt="check icon" />
        <p>
          Utilize the standard metrics for employee management. Ability to
          customize or create custom metrics for the needs of the staff
          management with a good user experience.
        </p>
      </div>
      <div className={`${styles.feature} ${styles.feature3}`} >
      <img src= {checkCircle} alt="check icon" />
        <p>
          With a self-service portal, employees are more engaged and feel
          more empowered thereby enriching the work experience of
          employees.
        </p>
      </div>
      <div className={`${styles.feature} ${styles.feature4}`}>
      <img src= {checkCircle} alt="check icon" />
        <p>
          Compliance with data security and privacy protocols. Top-level
          access controls, encryption, and other robust security measures
          are in place.
        </p>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Features