import React from 'react'
import styles from "./styles.module.css";
import profile from "./profile.module.css";

export function TextInputBox ({ className, value, name, title, handleChange }) {
  return (
    <div className={styles.formGroup}>
    <div className={className}>
    <label className={className}>{title}</label>
    <input  className={styles.inputField} type="text" value={value} name={name} onChange={handleChange}></input>
  </div>
  </div>

  )
}

export function NumberInputBox ({ className, name, value, title, handleChange }) {
    return (
      <div className={styles.formGroup}>
      <div className={className}>
      <label className={className}>{title}</label>
      <input className={styles.inputField} type="number" name={name} value={value} onChange={handleChange}></input>
    </div>
    </div>
    )
  }

  export function CurrencySelectInput ({ className, name, value, handleChange }) {
    return (
      
        <div className={styles.formGroup}>
        <div className={profile.label}>Currency</div>

        <input 
          className={styles.inputField}
          name={name}
          onChange={handleChange}
          value={value}
          list="currency" 
          placeholder='Please Select a Currency'
          >

        
        </input>
        {/* <select
          className={styles.inputField}
          name={name}
          onChange={handleChange}
          value={value}
        > */}

        <datalist id="currency">
          <option value="Naira" ></option>
          <option value="Dollar" ></option>
          </datalist>
        {/* </select> */}
      </div>


    )
  }
  