import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./pendingleave.module.css";
import PendingLeaves from './PendingLeaves'

const LeaveStatus = () => {

  return (
    <div className={styles.mainContent}>
        {/* <section className={styles.topSection}>
            <p className={styles.tableTitle}>
                Leave Status
            </p>
            <div className={styles.subtitle}>
                <Link to='/allleaves'>All Leaves (10) </Link>
                <Link to='/pendingleaves'> Pending (3)</Link>
            </div>
            

        </section> */}
        {/* <PendingLeaves /> */}

    </div>
  )
}

export default LeaveStatus;