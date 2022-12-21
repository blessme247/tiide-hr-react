// External Imports
import React from "react";
// import axios from "axios";
import { Formik, Field } from "formik";
// import { toast } from "react-toastify";

// Internal Imports
import styles from "./popup.module.css";
import { CreateLevelSchema } from "../utils/validation/policy-schema";
import levelServices from "../../_Helper/_Redux/redux/LevelManagement/LevelMgt.services";
import { useDispatch } from "react-redux";
import { loadLevels } from "../../_Helper/_Redux/redux/LevelManagement/LevelMgt.action";
import { toast } from "react-toastify";

const PopupForm = ({ closeModal }) => {
  const dispatch = useDispatch();

  return (

    <Formik
      initialValues={{
        title: "",
        salary: "",
        description: "",
        isActive: false,
      }}
      validationSchema={CreateLevelSchema}

      onSubmit={async (values, { setSubmitting, resetForm }) => {
        // const { title, salary, description } = values;
        setSubmitting(true);
        // console.log(values)
        levelServices.addNewLevel(values).then((res) => {
          // console.log("add new", res)
          levelServices.getAllLevels().then((res) => {
            // console.log("get all", res)
            dispatch(loadLevels(res))
            toast.success(
              "Level Created Successfully",
              {
                position: "top-center",
              }
            );
          })
          resetForm();
          closeModal();

        })
      }}


      validate={(values) => {
        const { title, salary, description } = values;
        const errors = {};
        // These custom error messages will override the default yup required error messages
        if (!title) errors.title = "This field is required";
        if (!salary) errors.salary = "This field is required";
        if (!description) errors.description = "This field is required";
        return errors;
      }}>

      {({
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
        handleReset,
        isSubmitting,
      }) => (

        <aside className={styles.popupContainer}>
          <div className={styles.popupContent}>
            <h4 className={styles.popupTitle}>Create Level</h4>
            <form className={styles.createLeaveForm}>
              <fieldset>
                <section className={styles.popupForm}>
                  <div>
                    <label htmlFor="title" className={styles.inputTitle}>
                      Title
                    </label>
                    <input
                      className={styles.role}
                      type="text"
                      name="title"
                      value={values.title}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.title && touched.title && (
                    <p className={styles.errorText}>{errors.title}</p>
                  )}

                  <div>
                    <label htmlFor="salary" className={styles.inputTitle}>
                      Basic Salary
                    </label>
                    <input
                      className={styles.salary}
                      type="number"
                      name="salary"
                      value={values.salary}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.salary && touched.salary && (
                    <p className={styles.errorText}>{errors.salary}</p>
                  )}

                  <div className={styles.columnSpanFull}>
                    <label htmlFor="description" className={styles.inputTitle}>
                      Description
                    </label>
                    <Field
                      className={styles.description}
                      as="textarea"
                      name="description"
                      value={values.description}
                      placeholder="Type Level Description..."
                      onChange={handleChange}
                    />
                  </div>
                  {errors.description && touched.description && (
                    <p className={styles.errorText}>{errors.description}</p>
                  )}

                </section>
                <section className={styles.submitButtons}>
                  <button
                    className={styles.secondaryBtn}
                    type="button"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>

                  <button
                    className={styles.primaryBtn}
                    type="button"
                    onClick={handleSubmit}
                  >
                    {isSubmitting ? "Sending" : "Save"}
                  </button>
                </section>
              </fieldset>
            </form>
          </div>
        </aside>
      )}
    </Formik >
  );
};

export default PopupForm;
