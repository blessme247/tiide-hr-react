import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./employerleave.module.css";

const TableLabels = (props) => {
  const {
    showPendingLeaves,
    showApprovedLeaves,
    showRejectedLeaves,
    showLeavePolicies,
    isApprovedActive,
    setIsApprovedActive,
    isRejectedActive,
    setIsRejectedActive,
    isPendingActive,
    setIsPendingActive,
    isPoliciesActive,
    setIsPoliciesActive,

  } = props;

  // const [isPendingActive, setIsPendingActive] = useState(false)
  // const [isRejectedActive, setIsRejectedActive] = useState(false)
  // const [isApprovedActive, setIsApprovedActive] = useState(false)
  // const [isPoliciesActive, setIsPoliciesActive] = useState(true)

  return (
    <div className={styles.tableLabels}>
      <button
        className={
          isPoliciesActive ? `${styles.label} ${styles.active}` : styles.label
        }
        onClick={() => {
          showLeavePolicies();
        }}
      >
        Leave Policies
      </button>
      <button
        className={
          isApprovedActive ? `${styles.label} ${styles.active}` : styles.label
        }
        onClick={() => {
          showApprovedLeaves();
        }}
      >
        Approved
      </button>
      <button
        className={
          isRejectedActive ? `${styles.label} ${styles.active}` : styles.label
        }
        onClick={() => {
          showRejectedLeaves();
        }}
      >
        Rejected
      </button>
      <button
        className={
          isPendingActive ? `${styles.label} ${styles.active}` : styles.label
        }
        onClick={() => {
          showPendingLeaves();
        }}
      >
        Pending
      </button>

      <Link className={styles.linkToLeaveApplication} to="/leaveapplication">Apply for leave</Link>
    </div>
  );
};

export default TableLabels;
