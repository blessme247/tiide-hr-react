import { Formik } from 'formik'
import React from 'react'

import styles from './popup.module.css'
import LevelMgtFunc from './LevelMgtFunc'

const CreateLevelFormik = ({ closeModal, localToken }) => {
  return (
    <Formik>
      initialValues={{
        title: "",
        salary: "",
        description: "",
      }}

      <form className={styles.createLevelForm}>

        <div className={styles.popupForm}>
          <div >
            <label htmlFor="leaveSelect">
              <h5>Level</h5>
            </label>
            <input type="text" className={styles.role} name="leaveSelect" placeholder="Select Level Type" />
          </div>
          <div>
            <label htmlFor="durationSelect">
              <h5>Basic Salary</h5>
            </label>
            {/* <input class="duration-input" type="text"> */}
            <input name="days" className={styles.salary} type="text" />
          </div>
          <div className={styles.columnSpanFull}>
            <label htmlFor="leaveText">
              <h5>Description</h5>
            </label>
            <textarea name="leaveText" className={styles.description} placeholder="Type Level Description" />
          </div>
        </div>
        <div className={styles.submitButtons}>
          <button className={styles.secondaryBtn} type="button" onClick={closeModal}>
            Cancel
          </button>
          <button className={styles.primaryBtn} id="save" type="button">
            Save
          </button>
        </div>

      </form>

    </Formik>
  )
}

export default CreateLevelFormik