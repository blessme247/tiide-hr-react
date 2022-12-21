import React from 'react'
import { useSelector } from 'react-redux'
import styles from "./approvedleave.module.css"
import tableStyles from "./employerleave.module.css"

const ApprovedLeaves = () => {

  const {appliedLeaves} = useSelector(state=>state.appliedLeavesStore)
  //filter applied leaves and get all leaves with status of approved
  const approvedLeaves = appliedLeaves.filter((leave)=>{
      return leave.status === 1
  })

  return (
    <div className={styles.mainContent}>
        <table className={tableStyles.table}>
        <thead className={tableStyles.thead}>
          <tr className={tableStyles.tr}>
            <td className={tableStyles.td}>Employee Name</td>
            <td className={tableStyles.td}>Leave Type</td>
            <td className={tableStyles.td}>From</td>
            <td className={tableStyles.td}>To</td>
            <td className={tableStyles.td}>Duration (Days)</td>
            
          </tr>
        </thead>

        <tbody>
          {approvedLeaves.length > 0 
          ? approvedLeaves.map((approvedLeave)=>{
            const {startDate, endDate, title, user, duration } = approvedLeave;
            const {firstName, lastName} = user;
            return ( 
            <tr className={tableStyles.tr}>
            <td className={tableStyles.td}> {`${firstName} ${lastName}`} </td>
            <td className={tableStyles.td}> {title} </td>
            <td className={tableStyles.td}> {startDate.slice(0, 10)} </td>
            <td className={tableStyles.td}> {endDate.slice(0, 10)} </td>
            <td className={tableStyles.td}> {duration} </td>
            
        </tr>
        )
          }) : <p>No data</p>
        }
            

        </tbody>
        </table>
    </div>
  )
}

export default ApprovedLeaves