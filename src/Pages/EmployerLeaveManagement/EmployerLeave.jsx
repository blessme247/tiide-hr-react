import React, { useState } from "react";

import PolicyCreateButton from "./CreateButton";
import styles from "./employerleave.module.css";
import LeaveManagementTable from "./LeaveManagementTable";
import TableTitle from "./TableTitle";

import PopupForm from "./PopupForm";
import TableLabels from "./TableLabels";
import PendingLeaves from "./PendingLeaves";
import ApprovedLeaves from "./ApprovedLeaves";
import RejectedLeaves from "./RejectedLeaves";
import EditForm from "./EditForm";
import DeleteConfirmation from '../../Components/DeleteConfirmation/DeleteConfirmation';

const EmployerLeave = (isLoading, setIsLoading) => {
  const [openPopup, setOpenpopup] = useState(false);
  const [openEditForm, setOpenEditForm] = useState(false);
  const [deleteMode, setDeleteMode] = useState(false);

  // on click of the poppopup button state the openpopup state to true
  const showModal = () => {
    setOpenpopup(true);
  };

  const showEditForm = () => {
    setOpenEditForm(true);
  };

  // on click of the cancel button, set the state back to false
  const closeModal = () => {
    setOpenpopup(false);
  };

  const closeEditForm = () => {
    setOpenEditForm(false);
  };

  
  const [leaveToEdit, setLeaveToEdit] = useState({});
  const {id, title, duration, description} = leaveToEdit;

  const [leaveToDelete, setLeaveToDelete] = useState({});
  // const {id} = leaveToDelete;

  
  //state for rendering leavePolicies, approved, rejected and pending leaves
  const [leavePolicies, setLeavePolicies] = useState(true);
  const [approvedLeave, setApprovedLeave] = useState(false);
  const [rejectedLeave, setRejectedLeave] = useState(false);
  const [pendingLeave, setPendingLeave] = useState(false);

  //State for toggling active states
  const [isPendingActive, setIsPendingActive] = useState(false);
  const [isRejectedActive, setIsRejectedActive] = useState(false);
  const [isApprovedActive, setIsApprovedActive] = useState(false);
  const [isPoliciesActive, setIsPoliciesActive] = useState(true);

  //Function for rendering leavePolicies..We set leave policies to true while other pages are set to false so that 
  //only leave policies can be shwon...We also toggle active state in this function
  const showLeavePolicies = () => {
    setApprovedLeave(false);
    setLeavePolicies(true);
    setRejectedLeave(false);
    setPendingLeave(false);
    setIsPoliciesActive(true);
    setIsApprovedActive(false);
    setIsRejectedActive(false);
    setIsPendingActive(false);
  };

  const showApprovedLeaves = () => {
    setApprovedLeave(true);
    setLeavePolicies(false);
    setRejectedLeave(false);
    setPendingLeave(false);
    setIsPoliciesActive(false);
    setIsApprovedActive(true);
    setIsRejectedActive(false);
    setIsPendingActive(false);
  };

  const showRejectedLeaves = () => {
    setApprovedLeave(false);
    setLeavePolicies(false);
    setRejectedLeave(true);
    setPendingLeave(false);
    setIsPoliciesActive(false);
    setIsApprovedActive(false);
    setIsRejectedActive(true);
    setIsPendingActive(false);
  };

  const showPendingLeaves = () => {
    setApprovedLeave(false);
    setLeavePolicies(false);
    setRejectedLeave(false);
    setPendingLeave(true);
    setIsPoliciesActive(false);
    setIsApprovedActive(false);
    setIsRejectedActive(false);
    setIsPendingActive(true);
  };

  return (
    <>
      <div className={styles.mainContent}>
        <TableTitle />

        <TableLabels
          showPendingLeaves={showPendingLeaves}
          showLeavePolicies={showLeavePolicies}
          showApprovedLeaves={showApprovedLeaves}
          showRejectedLeaves={showRejectedLeaves}
          isPendingActive={isPendingActive}
          setIsPendingActive={setIsPendingActive}
          isRejectedActive={isRejectedActive}
          setIsRejectedActive={setIsRejectedActive}
          isApprovedActive={isApprovedActive}
          setIsApprovedActive={setIsApprovedActive}
          isPoliciesActive={isPoliciesActive}
          setIsPoliciesActive={setIsPoliciesActive}
        />

        {leavePolicies ? (
          <LeaveManagementTable isLoading={isLoading} setIsLoading={setIsLoading} showEditForm={showEditForm} showModal={showModal} setLeaveToEdit={setLeaveToEdit} setDeleteMode={setDeleteMode} leaveToDelete={leaveToDelete} />
        ) : null}
        {pendingLeave ? <PendingLeaves /> : null}
        {approvedLeave ? <ApprovedLeaves /> : null}
        {rejectedLeave ? <RejectedLeaves /> : null}

        {openPopup ? <PopupForm isLoading={isLoading} setIsLoading={setIsLoading} closeModal={closeModal} /> : null}
        {openEditForm ? <EditForm closeEditForm={closeEditForm} leaveToEdit={leaveToEdit}  /> : null}

        {deleteMode ? <DeleteConfirmation deleteMode={deleteMode} setDeleteMode={setDeleteMode} leaveToDelete={leaveToDelete} setLeaveToDelete={setLeaveToDelete} /> : null}
      </div>
    </>
  );
};

export default EmployerLeave;
