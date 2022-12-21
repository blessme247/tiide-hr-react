import styles from "./RoleMgt.module.css"

import React from 'react'

const CreateRoleButton = ({openModal}) => {
  return (
    <>
    
        {/* button */}
        <div id={styles.btnContainer}>

            <button className={styles.createButton} onClick={openModal}>
                Create New Role
            </button>
        </div>
    
    </>
  )
}

export default CreateRoleButton