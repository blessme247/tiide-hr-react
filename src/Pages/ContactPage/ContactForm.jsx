//External Imports
import React from "react";
import styles from "./contact.module.css";
import { Formik, Field } from "formik";
import { ContactSchema } from "../utils/validation/validation-schema";

function ContactForm() {
  return (
    <>
      <Formik
        initialValues={{
          fullName: "",
          email: "",
          subject: "",
          message: "",
        }}
        validationSchema={ContactSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          const { fullName, email, subject, message } = values;
          setSubmitting(true);
          console.log(values);
          setTimeout(() => {
            setSubmitting(false);
            console.log("form submitted");
            resetForm();
          }, 4000);
        }}
        validate={(values) => {
          const { fullName, email, subject, message } = values;
          const errors = {};
          // These custom error messages will override the default yup required error messages
          if (!fullName) errors.fullName = "This field cannot be empty";
          if (!email) errors.email = "This field cannot be empty";
          if (!subject) errors.subject = "This field cannot be empty";
          if (!message) errors.message = "This field cannot be empty";
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
          <React.Fragment>
            <div className={styles.contactFormContainer}>
              <div className={styles.formHeading}>Let's talk!</div>
              <form className={styles.contactForm}>

                {/* FullName */}
                <div className={styles.formGroup}>
                  <label name="fullName" htmlFor="fullName">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={values.fullName}
                    onChange={handleChange}
                  />
                </div>
                {errors.fullName && touched.fullName && (
                  <p className={styles.errorText}>{errors.fullName}</p>
                )}


                {/* Email */}
                <div className={styles.formGroup}>
                  <label name="email" htmlFor="email">
                    Company Email
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


                {/* Subject   */}
                <div className={styles.formGroup}>
                  <label name="subject" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={values.subject}
                    onChange={handleChange}
                  />
                </div>
                {errors.subject && touched.subject && (
                  <p className={styles.errorText}>{errors.subject}</p>
                )}


                {/* Textarea */}
                <div className={styles.formGroup}>
                  <label htmlFor="message">Message</label>
                  <Field
                    as="textarea"
                    name="message"
                    className={styles.textarea}
                    onChange={handleChange}
                  />
                </div>
                {errors.message && touched.message && (
                  <p className={styles.errorText}>{errors.message}</p>
                )}

                {/* Submit Button */}
                <div className={styles.formGroup}>
                  <button
                    className={styles.contactSubmitBtn}
                    disabled={isSubmitting}
                    type="button"
                    onClick={handleSubmit}
                  >
                    {isSubmitting ? "Sending" : "Send Message"}
                  </button>
                </div>
              </form>
            </div>
          </React.Fragment>
        )}
      </Formik>
    </>
  );
}

export default ContactForm;
