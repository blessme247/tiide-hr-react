import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadAppliedLeaves } from '../../_Helper/_Redux/redux/LeaveApplication/leaveApplication.action'
import { fetchAppliedLeaves, updateLeaveApplication } from '../../_Helper/_Redux/redux/LeaveApplication/leaveApplication.services'
import styles from "./approvedleave.module.css"
import tableStyles from "./employerleave.module.css"
import { toast } from "react-toastify";

const ApprovedLeaves = () => {

  const {appliedLeaves} = useSelector(state=>state.appliedLeavesStore)
  //filter applied leaves and get all leaves with status of pending
  const pendingLeaves = appliedLeaves.filter((leave)=>{
      return leave.status === 0
  })

  const [updating, setUpdating] = useState(false)


  const dispatch = useDispatch();

  useEffect(()=>{

    fetchAppliedLeaves().then(()=>{

      dispatch(loadAppliedLeaves);
    })

  }, [dispatch, loadAppliedLeaves])
  

  

  const handleApproveLeaveApplication = (id, pendingLeave)=> {
    let payload;
        if (pendingLeave.status === 0 ) {
          payload = {status: 1}
        }

        setUpdating(true)

      updateLeaveApplication(id, payload).then((response)=>{
        fetchAppliedLeaves().then(()=>{

          dispatch(loadAppliedLeaves);
          toast.success(
            "Leave Application Approved Successfully",
            {
              position: "top-center",
            }
          );
          setUpdating(false)
          window.location.reload()
          
        })
        
      }).catch((error)=>{
        console.log(error)
      })
  }

  
  const handleRejectLeaveApplication = (id, pendingLeave)=> {
    let payload;
        if (pendingLeave.status === 0 ) {
          payload = {status: 2}
        }
        setUpdating(true)

      updateLeaveApplication(id, payload).then((response)=>{
        fetchAppliedLeaves().then(()=>{

          dispatch(loadAppliedLeaves);
          toast.success(
            "Leave Application Declined Successfully",
            {
              position: "top-center",
            }
          );
          setUpdating(false)
          window.location.reload()
        })
        
      }).catch((error)=>{
        console.log(error)
      })
  }

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
            <td className={tableStyles.td}>Action</td>
          </tr>
        </thead>

        <tbody>
          {pendingLeaves.length > 0 
          ? pendingLeaves.map((pendingLeave)=>{
            const {id, status, startDate, endDate, title, user, duration } = pendingLeave;
            const {firstName, lastName} = user;
            return ( 
            <tr className={tableStyles.tr}>
            <td className={tableStyles.td}> {`${firstName} ${lastName}`} </td>
            <td className={tableStyles.td}> {title} </td>
            <td className={tableStyles.td}> {startDate.slice(0, 10)} </td>
            <td className={tableStyles.td}> {endDate.slice(0, 10)} </td>
            <td className={tableStyles.td}> {duration} </td>
            {updating ? <p className={styles.updateText}>Updating</p> :
            <td className={tableStyles.actionBtnGroup}>
                <button className={tableStyles.approveBtn} onClick={() => handleApproveLeaveApplication(id, pendingLeave)}>Approve</button>
                <button className={tableStyles.declineBtn} onClick={() => handleRejectLeaveApplication(id, pendingLeave)}>Decline</button>
                        </td>
                        }
                        
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