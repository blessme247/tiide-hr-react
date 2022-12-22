// External Imports
import React, { useState, useEffect } from "react";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

//Internal Imports
import styles from "./employerleave.module.css";
import fetchLeavePolicies from "./fetchLeave";
import { getToken } from "../../_Helper/_Redux/Services/globalUtil";
import { loadLeavePolicies } from "../../_Helper/_Redux/leaveManagement/leave.action";
import axiosInstance from "../../_Helper/_Redux/AxiosConfig/axiosConfig";
import { ThreeDots } from "react-loader-spinner";

const LeaveManagementTable = (props) => {
  const {isLoading, showEditForm, showModal, setLeaveToEdit, setDeleteMode, setLeaveToDelete, leaveToDelete} = props;
  const {id, title, duration, description} = leaveToDelete;



  // Get access token from local storage
  const [token, setToken] = useState(false);
  const {access} = getToken();
  useEffect(() => {
    if (access) {
      setToken(true);
    }
  }, [access]);


  const {leaves} = useSelector(state=>state.leaveManagementStore); 
  const dispatch = useDispatch();

  

  //Edit Functionality
  const handleEdit = (leave)=>{
    showEditForm();
    setLeaveToEdit(leave)
    
    
  }


  //deleteFunctionality
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = (leave) => {
    setDeleteMode(true)
    setLeaveToDelete(leave)
  }



  function deleteLeave(id) {
    setIsDeleting(true);
    const response = axiosInstance
      .delete(`/leavePolicy/${id}`) // Delete from DB first
      .then((response) => {
        fetchLeavePolicies(access).then( (response) => {
            dispatch(loadLeavePolicies(response))
          }
        );
        toast.success(
          "Leave Policy Deleted Successfully",
          {
            position: "top-center",
          }
        );
        
        return response;
      })
      .catch((error) => {
        toast.error("Unable to delete Leave policy, please try again", { position: "top-center" });
      });

    return response;
  }

  return (
    <>
    <div className={styles.tableWrapper} > 
          <table className={styles.table}>
        <thead className={styles.thead}>
          <tr className={styles.tr}>
            <td className={styles.td}>Type</td>
            <td className={styles.td}>Duration (Days)</td>
            <td className={styles.td}>Description</td>
            <td className={styles.td}>Action</td>
          </tr>
        </thead>

        <tbody>
          <React.Fragment>
            {/* {isLoading && <ThreeDots />} */}

            {/* {!isLoading && leaves.length < 1 && (
              <p style={{ textAlign: "center" }}>No leave policies</p>
            )} */}

            {/* Leaves will be undefined on render, hence we check for when the length is > 0 before we map */}
            {leaves.length > 0
              ? leaves.map((leave, index) => {
              
                  const {id,  title, duration, description } = leave || {};
                  return (
                    <>
                      <tr className={styles.tr} key={id}>
                        <td className={styles.td}>{title}</td>
                        <td className={styles.td}>{duration}</td>
                        <td className={styles.td}>{description}</td>
                        <td>
                          <FaEdit className={styles.edit} onClick={() => handleEdit(leave)}/>
                          
                          <FaRegTrashAlt
                            className={styles.delete}
                            onClick={() => deleteLeave(id)}
                            // onClick={() => handleDelete(leave)}
                          />
                        </td>
                      </tr>
                    </>
                  );
                })
              : <p>No leave policies</p>}
          </React.Fragment>
        </tbody>
      </table>
      </div>

      <div className={styles.createBtnContainer}>
          <button className = {styles.createButton} type="button" 
          // the onclick function is called here
           onClick={showModal}>
            Create Leave Policy
          </button>
        </div>
    </>
  );
};

export default LeaveManagementTable;

