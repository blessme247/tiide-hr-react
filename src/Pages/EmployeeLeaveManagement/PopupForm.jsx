import React, { useEffect, useState } from "react";
import { Formik, Field } from "formik";

import styles from "./popup.module.css";
import { LeaveApplicationSchema } from "../utils/validation/leaveApplication-schema";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "../../_Helper/_Redux/AxiosConfig/axiosConfig";
import { getToken } from "../../_Helper/_Redux/Services/globalUtil";
import { toast } from "react-toastify";
import { fetchUserAppliedLeaves } from "../../_Helper/_Redux/redux/UserLeaveApplication/userLeaveApplication.services";
import { loadAppliedLeavesByUser } from "../../_Helper/_Redux/redux/UserLeaveApplication/userLeaveApplication.action";


const PopupForm = (props) => {
  let { closeModal } = props;

  const { access } = getToken();
  const { leaves } = useSelector((state) => state.leaveManagementStore);
  const dispatch = useDispatch();

  const [token, setToken] = useState(false);
  useEffect(() => {
    if (access) {
      setToken(true);
    }
  }, [access]);

  return (
    <>
      <Formik
        initialValues={{
          title: "",
          startDate: null,
          endDate: null,
          description: "",
          leavePolicyId: "",
        }}
        validationSchema={LeaveApplicationSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          const { title, startDate, endDate, description, leavePolicyId } =values;

          //Get leavePolicy Id
          const getPolicyId = (leaves) => {
            leaves.map((leave) => {
              if (leave.title === title) {
                let leavePolicyId = leave.id;
                values.leavePolicyId = leavePolicyId;
              }
            });
          };
          getPolicyId(leaves);

          setSubmitting(true);

          try {
            let response = await axiosInstance.post(
              "/leaveApplication",

              {
                title,
                startDate,
                endDate,
                description,
                leavePolicyId: values.leavePolicyId,
              }
            );

            if (token) {
              fetchUserAppliedLeaves(access).then((response) => {
                  dispatch(loadAppliedLeavesByUser(response));
                }
              )
              toast.success(
                "Leave Application Submitted Successfully",
                {
                  position: "top-center",
                }
              );
              resetForm();
              closeModal();
              return response;
            }
          } catch (error) {
            console.log(error)
            if(error.response.data.code === 400){
              toast.error(error.response.data.message, {
                position: "top-center",
              });
            } else {
              toast.error("Leave Application Failed! Please try again", {
                position: "top-center",
              });
            }
          }
        }}
        validate={(values) => {
          const { title, startDate, endDate, description } = values;
          const errors = {};
          // These custom error messages will override the default yup required error messages
          if (!title) errors.title = "This field is required";
          if (!startDate) errors.startDate = "This field is required";
          if (!endDate) errors.endDate = "This field is required";
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
                <h4 className={styles.popupTitle}>Leave Application </h4>
                <form className={styles.leavAppForm}>
                  <fieldset>
                    <section className={styles.popupForm}>
                      <div className={styles.columnSpanFull}>
                        <label htmlFor="title">
                          <h5>Type</h5>
                        </label>
                        <input
                          type="text"
                          name="title"
                          value={values.title}
                          list="leaves"
                          placeholder="Select Leave Type"
                          onChange={handleChange}
                        />
                        <datalist id="leaves" className={styles.leaves}>
                          {/* Get leave Policies from the backend */}
                          {leaves.length > 0
                            ? leaves.map((leave, index) => {
                                const { id, title } = leave;
                                return (
                                  <>
                                    <option  value={title} />
                                  </>
                                );
                              })
                            : null}
                        </datalist>
                      </div>

                      <div>
                        <label htmlFor="startDate">
                          <h5>Start Date</h5>
                        </label>
                        <input
                          type="date"
                          name="startDate"
                          placeholder="MM/DD/YYYY"
                          value={values.startDate}
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="endDate">
                          <h5>End Date</h5>
                        </label>
                        <input
                          type="date"
                          name="endDate"
                          placeholder="MM/DD/YYYY"
                          value={values.endDate}
                          onChange={handleChange}
                        />

                        {/* <Field control='date' name="birthDate"/> */}
                      </div>
                      <div className={styles.columnSpanFull}>
                        <label htmlFor="description">
                          <h5>Description</h5>
                        </label>
                        <Field
                          className={styles.textarea}
                          as="textarea"
                          name="description"
                          value={values.description}
                          //  placeholder="Type Leave Description..."
                          onChange={handleChange}
                        />
                      </div>
                    </section>
                    <section className={styles.submitButtons}>
                      <button
                        className={styles.secondaryBtn}
                        onClick={closeModal}
                        type="button"
                      >
                        Cancel
                      </button>
                      <button
                        className={styles.primaryBtn}
                        type="button"
                        onClick={handleSubmit}
                      >
                        Apply
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
};

export default PopupForm;
