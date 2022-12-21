import React from 'react'
import styles from "./employeeleave.module.css";


const PolicyCreateButton = ({showModal}) => {
  return (
    <>
        <div className={styles.createBtnContainer}>
          <button className={styles.createButton} type="button" onClick={showModal}>
            Apply For Leave
          </button>
        </div>

    </>
  )
}

export default PolicyCreateButton