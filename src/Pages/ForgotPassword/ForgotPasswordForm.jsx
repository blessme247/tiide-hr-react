//External Imports
import React from "react";
import { Formik } from "formik";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { toast } from "react-toastify";
import styles from "./forgotpassword.module.css"

//Internal Imports
import { SigninSchema } from "../utils/validation/validation-schema";

const ForgotPasswordForm = () => {
  return (
    <Formik
      initialValues={{
        email: "",
      }}
      validationSchema={SigninSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const { email } = values;
        setSubmitting(true);

      }}
      validate={(values) => {
        const { email } = values;
        const errors = {};
        // These custom error messages will override the default yup required error messages
        if (!email) errors.email = "This field is required";
        return errors;
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
        handleReset,
        isSubmitting,
      }) => (
        <form className={styles.resetPasswordForm}>
          <div className={styles.formHeading}>
            <h4>Forgot Password</h4>
          </div>

          {/* Email Field */}
          <div className={styles.formGroup}>
            <label name="email" htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
          </div>
          {errors.email && touched.email && (
            <p className={styles.errorText}>{errors.email}</p>
          )}

          <button
            className="primary-button"
            disabled={isSubmitting}
            type="button"
            onClick={handleSubmit}
          >Send Verification Mail</button>

        </form>
      )}
    </Formik>
  )
}

export default ForgotPasswordForm