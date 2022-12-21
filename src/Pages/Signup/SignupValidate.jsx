import React from "react";
import FormLeft from "./FormLeft";
import styles from "./signup.module.css";
import SignupFormik from "./SignupFormik";

function SignupValidate(props) {
  const {showBusinessProfileForm} = props;
  return (
    <div className={styles.container}>
      <div className={styles.signupFormContainer}>
        <FormLeft />

        <SignupFormik showBusinessProfileForm={showBusinessProfileForm}/>
      </div>
    </div>
  );
}

export default SignupValidate;

