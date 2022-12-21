import React from 'react'
import styles from './levelmanagement.module.css'


const Createlevelbutton = ({clickFunction}) => {
    return (
      <>
<div id="btnContainer" className={styles.createBtnContainer}>
          <button className = {styles.createButton} type="button" onClick={clickFunction}>
            Create Level
          </button>
        </div>
      </>
    )
}

export default Createlevelbutton