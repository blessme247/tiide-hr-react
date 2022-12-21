import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import SideNav from '../../Components/Dashboard/SideNav/SideNav';
import TopBar from '../../Components/Dashboard/TopBar/TopBar';
import { loadLeavePolicies } from '../../_Helper/_Redux/leaveManagement/leave.action';
import { loadAppliedLeavesByUser } from '../../_Helper/_Redux/redux/UserLeaveApplication/userLeaveApplication.action';
import { fetchUserAppliedLeaves } from '../../_Helper/_Redux/redux/UserLeaveApplication/userLeaveApplication.services';


import { getToken } from '../../_Helper/_Redux/Services/globalUtil';
import fetchLeavePolicies from '../EmployerLeaveManagement/fetchLeave';
import EmployeeLeave from './EmployeeLeave'
import styles from "./employeeleave.module.css";

const EmployeeLeaveManagement = () => {


  const {access} = getToken();
    const dispatch = useDispatch();



    // Fetch the leave Policies when this component is mounted
    useEffect(()=>{
  
      fetchLeavePolicies(access).then((response)=> {
        dispatch(loadLeavePolicies(response))

      })
    }, [])

    // Fetch the Applied leaves when this component is mounted
    useEffect(()=>{
  
      fetchUserAppliedLeaves(access).then((response)=> {
        dispatch(loadAppliedLeavesByUser(response))

      })
    }, [])


  return (
    <>
    <TopBar />
    <div className={styles.mainContainer}>
    <SideNav />
    <EmployeeLeave  />
    </div>
    </>
  )
}

export default EmployeeLeaveManagement