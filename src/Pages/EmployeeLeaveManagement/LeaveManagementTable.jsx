import React, { useState } from "react";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteLeave,
} from "../../_Helper/_Redux/redux/LeaveApplication/leaveApplication.services";
import { getToken } from "../../_Helper/_Redux/Services/globalUtil";
import styles from "./employeeleave.module.css";
import { toast } from "react-toastify";
import { fetchUserAppliedLeaves } from "../../_Helper/_Redux/redux/UserLeaveApplication/userLeaveApplication.services";
import { loadAppliedLeavesByUser } from "../../_Helper/_Redux/redux/UserLeaveApplication/userLeaveApplication.action";

const LeaveManagementTable = (props) => {
  const {showEditForm, setLeaveToEdit } = props;


  const { access } = getToken();
  // const { appliedLeaves } = useSelector((state) => state.appliedLeavesStore);
  const { appliedLeavesByUser } = useSelector((state) => state.userAppliedLeaveStore);
  console.log(appliedLeavesByUser, "employeeTable")
  const dispatch = useDispatch();

  //Edit Functionality
  const handleEdit = (leave)=>{
    showEditForm();
    setLeaveToEdit(leave)
    
    
  }


  

  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr className={styles.tr}>
              <td className={styles.td}>Type</td>
              <td className={styles.td}>Start Date</td>
              <td className={styles.td}>End Date</td>
              <td className={styles.td}>Description</td>
              <td className={styles.td}>Status</td>
              <td className={styles.td}>Action</td>
            </tr>
          </thead>

          <tbody>
            <React.Fragment>
              {/* {isLoading && <DonutSpinner />} */}

              {/* {!isLoading && appliedLeaves.length < 1 && (
                <p style={{ textAlign: "center" }}>No records found</p>
              )} */}

              {/* Leaves will be undefined on render, hence we check for when the length is > 0 before we map */}
              {appliedLeavesByUser.length > 0
                ? appliedLeavesByUser.map((leave) => {
                    const { id, title, description, startDate, endDate, status } =
                      leave || {};
                    let leaveStatus = ''
                      if (status === 0) {
                        leaveStatus = "Pending"
                      } else if (status === 1) {
                        leaveStatus = "Approved"
                      } else {
                        leaveStatus = "Rejected"
                      }
                    return (
                      <>
                        <tr className={styles.tr} key={id}>
                          <td className={styles.td}>{title}</td>
                          <td className={styles.td}>
                            {startDate.slice(0, 10)}
                          </td>
                          <td className={styles.td}>{endDate.slice(0, 10)}</td>
                          <td className={styles.td}>{description}</td>
                          <td className={leaveStatus == "Pending" ? styles.pending : leaveStatus == "Approved" ? styles.approved : leaveStatus == "Rejected" ? styles.rejected : null}>{leaveStatus}</td>
                          <td>
                            <FaEdit className={styles.edit} onClick={()=>{handleEdit(leave)}} />

                            <FaRegTrashAlt
                              className={styles.delete}
                              onClick={() =>
                                deleteLeave(access, id)
                                  .then((response) => {
                                    fetchUserAppliedLeaves(access).then(
                                      (response) => {
                                        dispatch(loadAppliedLeavesByUser(response));
                                      }
                                    );
                                    toast.success(
                                      "Leave Application Deleted Successfully",
                                      {
                                        position: "top-center",
                                      }
                                    );
                                  })
                                  .catch((error) => {
                                    toast.error(
                                      "Unable to delete Leave Application, please try again",
                                      { position: "top-center" }
                                    );
                                  })
                              }
                            />
                          </td>
                        </tr>
                      </>
                    );
                  })
                : null}
            </React.Fragment>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default LeaveManagementTable;
