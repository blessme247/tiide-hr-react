import React from "react";
import FormLeft from "./FormLeft";
import styles from "./signin.module.css";
import SigninFormik from "./SigninFormik";

function SigninValidate() {
  return (
    <main>
      <div className={styles.container}>
        <div className={`${styles.formWrapperSignin} ${styles.formWrapper}`}>
          <FormLeft />
          <SigninFormik />
        </div>
      </div>
    </main>
  );
}

export default SigninValidate;
