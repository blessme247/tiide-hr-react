import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import SideNav from '../../Components/Dashboard/SideNav/SideNav';
import TopBar from '../../Components/Dashboard/TopBar/TopBar';
import { loadLeavePolicies } from '../../_Helper/_Redux/leaveManagement/leave.action';
import { loadAppliedLeaves } from '../../_Helper/_Redux/redux/LeaveApplication/leaveApplication.action';
import { fetchAppliedLeaves } from '../../_Helper/_Redux/redux/LeaveApplication/leaveApplication.services';
import { getToken } from '../../_Helper/_Redux/Services/globalUtil';
import EmployerLeave from './EmployerLeave'
import styles from "./employerleave.module.css";
import fetchLeavePolicies from './fetchLeave';


  const EmployerLeaveManagement = () => {

    const {access} = getToken();
    const [isLoading, setIsLoading] = useState(true)

    

    const {leaves} = useSelector(state=>state.leaveManagementStore); 
   
    const dispatch = useDispatch();


    // Fetch the leave Policies when this component is mounted
    useEffect(()=>{

      fetchLeavePolicies(access).then((response)=> {
        dispatch(loadLeavePolicies(response))
        setIsLoading(false)
       
      })
  
    }, [])

// Fetch the applied leaves when this component is mounted
    useEffect(()=>{
    
      
      fetchAppliedLeaves(access).then((response)=> {
        dispatch(loadAppliedLeaves(response))
        setIsLoading(false)
        
       
      })
     
  
    }, [])
  
  return (
    <>
    <TopBar  />
    
    <div className={styles.mainContainer}>
    <SideNav />
    <EmployerLeave isLoading={isLoading} setIsLoading={setIsLoading} />
    
    </div>
    </>
  )
}

export default EmployerLeaveManagement