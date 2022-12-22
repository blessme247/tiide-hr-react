// External Imports
import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";

// Internal Imports
import { SignupSchema } from "../utils/validation/validation-schema";
import styles from "./signup.module.css";
import axios from "axios";
import axiosInstance from "../../_Helper/_Redux/AxiosConfig/axiosConfig";


function SignupFormik(props) {

  const {showBusinessProfileForm} = props;

  // Toggle Password Visibility Functionality
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);

  // Redirect state
  const [redirect, setRedirect] = useState(false)


  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const toggleConfirmPassword = () => {
    setConfirmPasswordShown(!confirmPasswordShown)
  };

  const hidePasswordIcon = (
    <AiFillEyeInvisible
      className={styles.hidePass}
      size="28px"
      color="grey"
      // padding-top="16px"
    />
  );

  const showPasswordIcon = (
    <AiFillEye
      className={styles.showPass}
      size="28px"
      color="#c4c4c4"
    />
  );

  //Signup Authentication 
  const navigate = useNavigate();
  const [token, setToken] = useState(false);
  const localToken = JSON.parse(localStorage.getItem("token"));
  let tokenExists = localToken?.length > 0;
  useEffect(() => {
    
    if (tokenExists) {
      setToken(true);
    }
  }, [tokenExists]);
  return (
    <>
       <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={async (values, { setSubmitting}) => {
            const { firstName, lastName, email, password } = values;
            setSubmitting(true);
           
            try {
              console.log("Making request")
                let response = await axiosInstance.post("/auth/register", {
                firstName,
                lastName,
                email,
                password,
              });
              
              const {access, refresh} = response.data.tokens
              const tokens=[]
              tokens.push( {access: access.token})
              tokens.push( {refresh: refresh.token})
              localStorage.setItem("token", JSON.stringify(tokens) )
              
              const {user} = response.data
              const userDetails = []
              userDetails.push( {firstName: user.firstName})
              userDetails.push( {lastName: user.lastName})
              localStorage.setItem("currentUser", JSON.stringify(userDetails) )
              
              if(token){
                setRedirect(true)
                showBusinessProfileForm();
                return response;
              }
            } catch (error) {
              console.log(error)
              if(error.response.data.code === 400){
                toast.error(error.response.data.message)
              } else {

                toast.error("Signup Failed! Please try again", {
                  position: "top-center",
                });
              }
              
            }
          
          }}
          validate={(values) => {
            const { firstName, lastName, email, password, confirmPassword } = values;
            const errors = {};
            // These custom error messages will override the default yup required error message
            if (!firstName) errors.firstName = "This field is required"; 
            if (!lastName) errors.lastName = "This field is required"; 
            if (!email) errors.email = "This field is required"; 
            if (!password) errors.password = "This field is required"; 
            // if (!confirmPassword) errors.confirmPassword = "This field is required"; 
            return errors;
          }}>
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
          isSubmitting,
        }) => (

          
          <React.Fragment>
            <form className={styles.signupForm}>
              <h5 className={styles.heading5}>Let's get you started!</h5>

              {/* First Name Field */}
              <div className={styles.formGroup}>
                <label name="fisrtName" htmlFor="firstName" className={styles.label}>
                  First Name
                </label>
                <input
                  className={styles.input}
                  type="text"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                />
              </div>
              {errors.firstName && touched.firstName && (
                <p className={styles.errorText}>{errors.firstName}</p>
              )}

              {/* Last Name Field */}
              <div className={styles.formGroup}>
                <label name="lastName" htmlFor="lastName" className={styles.label}>
                  Last Name
                </label>
                <input
                  className={styles.input}
                  type="text"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                />
              </div>
              {errors.lastName && touched.lastName && (
                <p className={styles.errorText}>{errors.lastName}</p>
              )}

              {/* Email field */}
              <div className={styles.formGroup}>
                <label name="email" htmlFor="email" className={styles.label}>
                  Email
                </label>
                <input
                  className={styles.input}
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
              </div>
              {errors.email && touched.email && (
                <p className={styles.errorText}>{errors.email}</p>
              )}

              {/* Password Field */}
              <div className={styles.formGroup}>
                <label
                  name="password"
                  htmlFor="password"
                  className={styles.label}
                >
                  Password
                </label>
                <input
                  className={`${styles.input} ${styles.passwordInput}`}
                  type={passwordShown ? "text" : "password"}
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                /> 
                
                <span className={styles.toggleBtn1}
               onClick={togglePassword}
             > {passwordShown ?  showPasswordIcon : hidePasswordIcon }
              </span>
                
              </div>
              {errors.password && touched.password && (
                <p className={styles.errorText}>{errors.password}</p>
              )}

              {/* Cpassword Field */}
              {/* <div className={styles.formGroup}>
                <label
                  name="confirmPassword"
                  htmlFor="confirmPassword"
                  className={styles.label}
                >
                  Confirm Password
                </label>
                <input
                  className={`${styles.input} ${styles.passwordInput}`}
                  type={confirmPasswordShown ? "text" : "password"}
                  name="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleChange}
                />
                  <span className={styles.toggleBtn2}
               onClick={toggleConfirmPassword}
             > {confirmPasswordShown ? showPasswordIcon : hidePasswordIcon } 
              </span>

              </div>
              {errors.confirmPassword && touched.confirmPassword && (
                <p className={styles.errorText}>{errors.confirmPassword}</p>
              )} */}

              {/* Button Field */}
              <div>
                <div className={styles.formGroup}>
                  <button
                    className={ isSubmitting ? styles.disabledBtn : styles.submitBtn}
                    disabled={isSubmitting}
                    type="button"
                    onClick={handleSubmit}
                  >
                    {isSubmitting ? "Signing Up" : "Signup"}
                  </button>
                </div>

                
                <p className={styles.signinRedirect}>
                  Already have an account? <Link to="/signin">Sign In</Link>
                </p>
              </div>
            </form>
          </React.Fragment>
        )}
      </Formik>
    </>
  );
}

export default SignupFormik;
