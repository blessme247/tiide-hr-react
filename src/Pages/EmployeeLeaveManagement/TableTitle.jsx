import React from 'react'
import { Link } from 'react-router-dom';
import PolicyCreateButton from './CreateButton';
import styles from "./employeeleave.module.css";


const TableTitle = ({showModal}) => {
  return (
    <>


    <div className = {styles.cardTitle2}>
          <span className ={styles.xlargeTextBold}>Leave Application History</span>

          <PolicyCreateButton showModal={showModal} />
          
        </div>
        

        <hr className={styles.dividerLine} />

        <Link className={styles.linkToLeaveManagement} to ="/leaveManagement"> Manage Leaves</Link>

      
    </>
  )
}

export default TableTitle