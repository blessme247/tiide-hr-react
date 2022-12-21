import React from 'react'
import SignInFormImage from "../../Assets/images/people5.jpg"
import styles from "./signin.module.css";

const FormLeft = () => {
  return (
    <>
    <div className={styles.formLeft}>
        <img src={SignInFormImage} alt="" className={styles.signupImg} />
        </div>
    </>
  )
}

export default FormLeft