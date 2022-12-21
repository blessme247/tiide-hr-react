// Similar to useContext in Context api, We can use useSelector to access the data from the store which is what we do on line 24
// While useDispatch is used to dispatch our actions
// leaveManagementStore comes from the rootReducer
// We also import the loadLeavePolicies pure function to help us load the leaves

//External Imports
import React, { useEffect, useState } from "react";
import { Formik, Field } from "formik";
import { toast } from "react-toastify";
import axiosInstance from "../../_Helper/_Redux/AxiosConfig/axiosConfig";
import { useDispatch, useSelector } from "react-redux";

//Internal Imports
import styles from "./popup.module.css";
import { CreateLeaveSchema } from "../utils/validation/policy-schema";
import fetchLeavePolicies from "./fetchLeave";
import { loadLeavePolicies } from '../../_Helper/_Redux/leaveManagement/leave.action';
import { getToken } from "../../_Helper/_Redux/Services/globalUtil";
import LeaveManagementServices from "../../_Helper/_Redux/leaveManagement/leave.service";


function EditForm(props) {
  let { closeEditForm, leaveToEdit } = props;
  const {id, title, duration, description} = leaveToEdit;

  const [isLoading, setIsLoading] = useState(true);
  
  const {access} = getToken(); //Here we desctructure access token from the imported getToken function
  const {leaves} = useSelector(state=>state.leaveManagementStore); 
 
  const dispatch = useDispatch();
  
  

  
  const [token, setToken] = useState(false);
  useEffect(() => {
    if (access) {
      setToken(true);
    }
  }, [access]);

  const initialValues = {
    title: leaveToEdit.title,
    duration: leaveToEdit.duration,
    description: leaveToEdit.description,
  }

  return (
    <>
      <Formik
        initialValues={ initialValues  }
        validationSchema={CreateLeaveSchema}
        enableReinitialize
        onSubmit={async (values, { setSubmitting, resetForm }) => {
            const { title, duration, description } = values;
          setSubmitting(true);

          LeaveManagementServices.editLeavePolicy(id, values).then((response)=>{
            
            fetchLeavePolicies(access).then((response)=>{
                dispatch(loadLeavePolicies(response))
                toast.success("Leave policy Updated Successfully", {position: "top-center"})
            })
            resetForm()
            closeEditForm()
            return response
          }).catch((error)=>{
            toast.error("Unable to update leave policy, please try again")
          })
          

        }}
        
    

        validate={(values) => {
          const { title, duration, description } = values;
          const errors = {};
          // These custom error messages will override the default yup required error messages
          if (!title) errors.title = "This field is required";
          if (!duration) errors.duration = "This field is required";
          if (!description) errors.description = "This field is required";
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
            <aside className={styles.popupContainer}>
              <div className={styles.popupContent}>
                <h4 className={styles.popupTitle}>Edit Leave Policy</h4>
                <form id="createLeaveForm" className={styles.popupForm}>
                  <fieldset>
                    <section className={styles.popupForm}>
                      {/* LeaveType Field */}
                      <div>
                        <label htmlFor="leaveSelect">Type</label>
                        <input
                          className={styles.leaveType}
                          type="text"
                          name="title"
                          value={values.title}
                          onChange={handleChange}
                        />
                      </div>
                      {errors.title && touched.title && (
                        <p className={styles.errorText}>{errors.title}</p>
                      )}

                      {/* Duration Field */}
                      <div>
                        <label htmlFor="durationSelect">Duration (Days)</label>
                        <input
                          className={styles.duration}
                          type="number"
                          name="duration"
                          value={values.duration}
                          min={0}
                          max={365}
                          onChange={handleChange}
                        />
                      </div>
                      {errors.duration && touched.duration && (
                        <p className={styles.errorText}>{errors.duration}</p>
                      )}

                      {/* Textarea */}
                      <div className={styles.columnSpanFull}>
                        <label htmlFor="leaveText">Description</label>
                        <Field
                          className={styles.description}
                          as="textarea"
                          name="description"
                          value={values.description}
                          placeholder="Type Leave Description..."
                          onChange={handleChange}
                        />
                      </div>
                      {errors.description && touched.description && (
                        <p className={styles.errorText}>{errors.description}</p>
                      )}

                      {/* Action Buttons */}
                    </section>
                    <section className={styles.submitButtons}>
                      <button
                        className={styles.secondaryBtn}
                        type="button"
                        onClick={closeEditForm}
                      >
                        Cancel
                      </button>
                      <button
                        className={`${styles.primaryBtn} ${styles.saveButton}`}
                        type="button"
                        onClick={handleSubmit}
                      >
                        Update
                      </button>
                    </section>
                  </fieldset>
                </form>
              </div>
            </aside>
          </React.Fragment>
        )}
      </Formik>
    </>
  );
}

export default EditForm;
