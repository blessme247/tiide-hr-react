import React from 'react'
import people6 from "../../Assets/images/people6.jpg";
// import SignInFormImage from "../../Assets/images/people5.jpg"
import styles from "./signup.module.css";

const FormLeft = () => {
  return (
    <>
    <div className={styles.formLeft}>
        <img src={people6} className={styles.formImage} alt="employee" />
        </div>
    </>
  )
}

export default FormLeft