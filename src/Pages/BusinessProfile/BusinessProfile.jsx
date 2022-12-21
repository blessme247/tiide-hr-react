import React from "react";
import { useState, useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import styles from "./profile.module.css";
import style from "./styles.module.css";
import { TextInputBox, NumberInputBox, CurrencySelectInput } from "./Input";
import { BusinessRegistrationSchema } from "../utils/validation/validation-schema";

// External imports
import { Formik } from "formik";
import axios from "axios";
import { toast } from "react-toastify";
import axiosInstance from "../../_Helper/_Redux/AxiosConfig/axiosConfig";

function BusinessRegistrationForm() {
    const navigate = useNavigate();
    const [token, setToken] = useState(false);
    const localToken = JSON.parse(localStorage.getItem("token"));
    let tokenExists = localToken?.length > 0;
    useEffect(() => {
        console.log("Token exists")
        if (tokenExists) {
        setToken(true);
        }
    }, [tokenExists]);
    return (
  <>
    <Formik
      initialValues={{
        name: "",
        email: "",
        cacno: "",
        address: "",
        taxid: "",
        rcno: "",
      }}
      validationSchema={BusinessRegistrationSchema}
      onSubmit={async  (values, { setSubmitting, }) => {
        const { name, email, cacno, address, taxid, rcno } = values;
        setSubmitting(true);
        try {
            console.log("Making request to backend")

              let response = await axiosInstance.post("/business", {
              name,
              email,
              cacno,
              address,
              taxid,
              rcno
            }, 
            { headers: {
                 Authorization : `Bearer ${localToken[0].access}`
                 }},
            );
            
            
            
            // if(token){
            
            
                navigate("/employeemanagement");
              
            
            return response;
            // }
          } catch (error) {
            if(error.response.data.code === 400){
              toast.error(error.response.data.message)
            } else {

              toast.error("Unable to create business profile, please try again", {
                position: "top-center",
              });
            }
            
          }
        
      }}
      validate={(values) => {
        const { name, email, cacno, address, taxid, rcno, currency } = values;
        const errors = {};

        if (!email) errors.email = "This field is required";
        if (!name) errors.name = "This field is required";
        if (!cacno) errors.cacno = "This field is required";
        if (!address) errors.address = "This field is required";
        if (!taxid) errors.taxid = "This field is required";
        if (!rcno) errors.rcno = "This field is required";
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
          <>
          <div className={styles.bizreg}>
      <form className={styles.businessForm}>
         <h3 className={styles.formHeading}>BUSINESS PROFILE</h3>
         
         <TextInputBox className={`${styles.FormInput} ${styles.label} `}  title="Business Name" name="name" handleChange={handleChange} value={values.name}  />
         {errors.name && touched.name && (
                <p className={style.errorText}>{errors.name}</p>
              )}

         <TextInputBox className={`${styles.FormInput} ${styles.label} `} title="Business Email" name="email" handleChange={handleChange} value={values.email} />
         {errors.email && touched.email && (
                <p className={style.errorText}>{errors.email}</p>
              )}

         <TextInputBox className={`${styles.FormInput} ${styles.label} `} title="Business Address" name="address" handleChange={handleChange} value={values.address}  />
         {errors.address && touched.address && (
                <p className={style.errorText}>{errors.address}</p>
              )}

         <NumberInputBox className={`${styles.FormInput} ${styles.label} `} title="CAC Registration Number" name="cacno" handleChange={handleChange} value={values.cacno}  />
         {errors.cacno && touched.cacno && (
                <p className={style.errorText}>{errors.cacno}</p>
              )}
              
         <NumberInputBox className={`${styles.FormInput} ${styles.label} `} title=" RC Number"  name="rcno" handleChange={handleChange} value={values.rcno}  />
         {errors.rcno && touched.rcno && (
                <p className={style.errorText}>{errors.rcno}</p>
              )}
              
         <NumberInputBox className={`${styles.FormInput} ${styles.label} `} title="Tax Identification Number" name="taxid" handleChange={handleChange} value={values.taxid}  />
         {errors.taxid && touched.taxid && (
                <p className={style.errorText}>{errors.taxid}</p>
              )}


      
        <div className={style.formGroup}>
        <button type="submit" onClick={handleSubmit}  className={ isSubmitting ? styles.btnRegisterDisabled : styles.btnRegister}>
          {isSubmitting ? "Loading" : "Continue"}
          </button>
          </div>
          
      </form>
    </div>
         
          </>
        </React.Fragment>
      )}
    </Formik>
  </>
   );
}

export default BusinessRegistrationForm;
