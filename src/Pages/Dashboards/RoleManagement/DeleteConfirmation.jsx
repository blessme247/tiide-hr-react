import React from 'react'
import styles from '../../../Components/DeleteConfirmation/deleteconfirmation.module.css'
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

//Internal Imports
import { getToken } from "../../../_Helper/_Redux/Services/globalUtil";
import roleMgtServices from '../../../_Helper/_Redux/redux/RoleManagement/roleManagement.services';
import { loadRoles } from '../../../_Helper/_Redux/redux/RoleManagement/roleManagement.action';
import fetchAllRoles from "../../../_Helper/_Redux/redux/RoleManagement/roleManagement.services";


const DeleteConfirmation = ( props) => {
    const {setDeleteMode, roleToDelete, setRoleToDelete } = props;
    const {id} = roleToDelete;

    const dispatch = useDispatch()

    const closeConfirmationBox = ()=> {
        setDeleteMode(false)
    }

    const {access} = getToken();

    const handleDelete = (id)=> {
    
    roleMgtServices.deleteLeavePolicy(id).then((response)=>{
        fetchAllRoles(access).then((response)=> {
            dispatch(loadRoles(response))
            toast.success("Role Deleted Successfully",{position: "top-center"})
        })
        setDeleteMode(false)
        return response;
    })
        
        .catch((error) => {
            toast.error("Unable to delete Role, please try again", { position: "top-center" });
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