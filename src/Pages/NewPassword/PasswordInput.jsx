import React from 'react'
import styles from './password.module.css'

const PasswordInput = (props) => {
  return (
    <div className={styles.PasswordInput}>
    <label>{props.placeholder}</label>
    <input placeholder={props.placeholder}/>

</div> 
)
}

export default PasswordInput