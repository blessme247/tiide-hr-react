import React from 'react'
import styles from "./employerleave.module.css";


const PolicyCreateButton = ({clickFunction}) => {
  return (
    <>
        <div id="btnContainer" className={styles.createBtnContainer}>
          <button className = {styles.createButton} type="button" 
          // the onclick function is called here
           onClick={clickFunction}>
            Create Leave Policy
          </button>
        </div>

    </>
  )
}

export default PolicyCreateButton