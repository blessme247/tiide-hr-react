import React, {useState} from 'react'
import PolicyCreateButton from './CreateButton';
import styles from "./employeeleave.module.css";
import LeaveManagementTable from './LeaveManagementTable';
import TableTitle from './TableTitle';

import PopupForm from "./PopupForm";
import { useSelector } from 'react-redux';
import EditForm from './EditForm';
import { ThreeDots } from 'react-loader-spinner';


const EmployeeLeave = () => {


  const [openPopup, setOpenpopup] = useState(false);
  const [openEditForm, setOpenEditForm] = useState(false);

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

  let [upcomingLeave, setUpcomingLeave] = useState(false)
  
  const [leaveToEdit, setLeaveToEdit] = useState({});
  const {leavePolicyId, title, startDate, endDate, description} = leaveToEdit;

    let {appliedLeavesByUser} = useSelector(state=>state.userAppliedLeaveStore)
    const totalLeaves = appliedLeavesByUser.length;

    //Pending leaves Count
    const pendingLeaves = appliedLeavesByUser.filter((appliedLeaveByUser)=>{
      return appliedLeaveByUser.status === 0;
    })
    const totalPendingLeaves = pendingLeaves.length;

    //rejected leaves count
    const rejectedLeavesCount = appliedLeavesByUser.filter((appliedLeaveByUser)=>{
      return appliedLeaveByUser.status > 1;
    })
    const totalRejectedLeaves = rejectedLeavesCount.length;

    //approved leaves count
    const approvedLeavesCount = appliedLeavesByUser.filter((appliedLeaveByUser)=>{
      return appliedLeaveByUser.status === 1;
    })
    const totalApprovedLeaves = approvedLeavesCount.length;

    const approvedLeaves = appliedLeavesByUser.filter((appliedLeaveByUser)=>{
      // setUpcomingLeave(true)
      return appliedLeaveByUser.status === 1;
    }) 

    


  return (
    <>

    <div className={styles.mainContent}>

        <div className={styles.leaveSummary}>

        {/* <!-- CARD 1 --> */}
      <section className={`${styles.contentBoxes} ${styles.leftContentBox}`}>

        <h3 className={`${styles.session} ${styles.semiLargeTextBold}`}>Leave Application Analytics </h3>
        

            <div className={styles.leaveBrief}>
          <div  className={`${styles.leaveCounter} ${styles.secBlueBg}` }>
            <div className={`${styles.leaveCount} ${styles.largeTextBold}` }>{totalLeaves}</div> 
            <p className={styles.largeText}>Total</p>
          </div>

          <div  className={`${styles.leaveCounter} ${styles.pinkBg}`}>
            <div  className={`${styles.leaveCount} ${styles.largeTextBold}` }>{totalApprovedLeaves}</div>
            <p className={styles.largeText}>Approved</p>
          </div>

          <div className={`${styles.leaveCounter} ${styles.greenBg}`}>
            <div className={`${styles.leaveCount} ${styles.largeTextBold}` }>{totalRejectedLeaves}</div>
            <p className={styles.largeText}>Rejected</p>
          </div>

          <div className={`${styles.leaveCounter} ${styles.greenBg}`}>
            <div className={`${styles.leaveCount} ${styles.largeTextBold}` }>{totalPendingLeaves}</div>
            <p className={styles.largeText}>Pending</p>
          </div>

          </div>


      </section>

       {/* CARD 2  */}
      <section  className={`${styles.contentBoxes} ${styles.rightContentBox}`}>
        <h3 className={`${styles.cardTitle} ${styles.semiLargeTextBold}`}>Upcoming Leave</h3>

        {/* {approvedLeaves[0] === undefined && <p>No data</p>} */}
        
        

        {/* {upcomingLeave === true  ? <ThreeDots/> :  */}
          {approvedLeaves.length === 0 ? <p>No upcoming leave</p> :  ( 
        <div className={styles.sideContainer}>
    
          <div  className={`${styles.largeText} ${styles.sideTitle} `}>{approvedLeaves[0]?.title}</div>
      
          <div  className={styles.sideWrapper}>

            <p className={styles.normalText}>{approvedLeaves[0]?.startDate.slice(0, 10)}</p>
            <p>To</p>
  
            <p  className={styles.normalText}>{approvedLeaves[0]?.endDate.slice(0, 10)}</p>
           
          </div> 
        </div>)  }
          

      </section>

        </div>

        <div className={styles.leaveHistory}> 

        <TableTitle showModal={showModal} />
        {/* <PolicyCreateButton showModal={showModal} /> */}


        <LeaveManagementTable showEditForm={showEditForm} showModal={showModal} setLeaveToEdit={setLeaveToEdit} />


        {openPopup && <PopupForm closeModal={closeModal} /> }
        {openEditForm && <EditForm closeEditForm={closeEditForm} leaveToEdit={leaveToEdit} /> }

        </div>
        
      </div>
    </>
  )
}

export default EmployeeLeave




