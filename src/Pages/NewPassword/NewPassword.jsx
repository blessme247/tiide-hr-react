import React from 'react'
import styles from './password.module.css'

const NewPassword = () => {
  return (
    <div className={styles.newpassword}>
         <form>
            <h4>SET NEW PASSWORD </h4>
            <h5>forgotten password?</h5>
        <div className={styles.passwordinput}>
          <label>Password</label>
          <input placeholder= "Password" />
        </div>
        <div className={styles.passwordinput}>
          <label>Confirm Password</label>
          <input placeholder= "Password" />
        </div>
        <button className={styles.button}>Send</button>
        </form>

    </div>
  )
}

export default NewPassword