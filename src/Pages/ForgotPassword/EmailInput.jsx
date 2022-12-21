import React from 'react'
import styles from './forgot.module.css'

const EmailInput = (props) => {
  return (
    <div className={styles.EmailInput}>
        <label>{props.placeholder}</label>
        <input placeholder={props.placeholder}/>

    </div>
  )
}

export default EmailInput