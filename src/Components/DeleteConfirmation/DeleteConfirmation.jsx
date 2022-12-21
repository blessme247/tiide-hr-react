import React from 'react'
import LeaveManagementServices from '../../_Helper/_Redux/leaveManagement/leave.service'
import styles from './deleteconfirmation.module.css'
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

//Internal Imports
import { loadLeavePolicies } from "../../_Helper/_Redux/leaveManagement/leave.action";
import fetchLeavePolicies from '../../Pages/EmployerLeaveManagement/fetchLeave';
import { getToken } from '../../_Helper/_Redux/Services/globalUtil';

const DeleteConfirmation = ( props) => {
    const {setDeleteMode, leaveToDelete, setLeaveToDelete } = props;
    const {id} = leaveToDelete;

    const dispatch = useDispatch()

    const closeConfirmationBox = ()=> {
        setDeleteMode(false)
    }

    const {access} = getToken();

    const handleDelete = (id)=> {
    
    LeaveManagementServices.deleteLeavePolicy(id).then((response)=>{
        fetchLeavePolicies(access).then((response)=> {
            dispatch(loadLeavePolicies(response))
            toast.success("Leave Policy Deleted Successfully",{position: "top-center"})
        })
        setDeleteMode(false)
        return response;
    })
        
        .catch((error) => {
            toast.error("Unable to delete Leave policy, please try again", { position: "top-center" });
          });
}


  return (
    <div className={styles.confirmationContainer}> 
    <div className={styles.confirmationBox}>
        <p className={styles.confirmText}>Are You sure You want to delete this?</p>

        <div className={styles.buttonWrapper}>
            <button className={styles.cancelBtn} onClick = {()=>{closeConfirmationBox()}}>Cancel</button>
            <button className={styles.confirmBtn} onClick = {()=>{handleDelete(id)}}>Yes</button>

        </div>  
    </div>
    </div>
  )
}

export default DeleteConfirmation