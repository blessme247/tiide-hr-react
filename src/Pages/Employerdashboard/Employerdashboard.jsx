import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SideNav from '../../Components/Dashboard/SideNav/SideNav'
import TopBar from '../../Components/Dashboard/TopBar/TopBar'
import { loadLeavePolicies } from '../../_Helper/_Redux/leaveManagement/leave.action'
import { loadEmployee } from '../../_Helper/_Redux/redux/EmployeeManagement/employeemanagement.action'
import employeeManagementServices from '../../_Helper/_Redux/redux/EmployeeManagement/employeemanagement.services'
import { loadLevels } from '../../_Helper/_Redux/redux/LevelManagement/LevelMgt.action'
import levelServices from '../../_Helper/_Redux/redux/LevelManagement/LevelMgt.services'
import { loadRoles } from '../../_Helper/_Redux/redux/RoleManagement/roleManagement.action'
import roleMgtServices from '../../_Helper/_Redux/redux/RoleManagement/roleManagement.services'
import { getToken } from '../../_Helper/_Redux/Services/globalUtil'
import fetchLeavePolicies from '../EmployerLeaveManagement/fetchLeave'
import Employercard from './Employercard'
import emdash from "./employerdash.module.css"
import EmployerTable from './EmployerTable'
import { Link } from 'react-router-dom'
import Details from './Details'
import userServices from '../../_Helper/_Redux/redux/User/user.services'
import { loadCurrentUser } from '../../_Helper/_Redux/redux/User/user.action'






const Employerdashboard = () => {

  const { access } = getToken();
  const dispatch = useDispatch();

  //Load leaves when this component mounts so that we can have access to the length 
  //of the leaves and display it in the UI
  useEffect(() => {
    fetchLeavePolicies(access).then((response) => {
      dispatch(loadLeavePolicies(response))
    })

    roleMgtServices.fetchAllRoles().then((res) => {
      dispatch(loadRoles(res))
    })

    levelServices.getAllLevels().then((res) => {
      dispatch(loadLevels(res))
    })

    employeeManagementServices.getEmployee().then((data) => {
      dispatch(loadEmployee(data))
    })

  
    userServices.getCurrentUser().then((response)=> {
      dispatch(loadCurrentUser(response))

    })


  }, [])

  const { leaves } = useSelector(state => state.leaveManagementStore);
  const { roles } = useSelector((state) => state.RoleManagementStore);
  const { allLevels } = useSelector((state) => state.LevelManagementStore);
  const { employeeData } = useSelector((state) => state.EmployeeManagementStore);
 


  const leaveCount = leaves.length;
  const roleCount = roles.length;
  const levelCount = allLevels.length;
  const employeeCount = employeeData.length;



  // check for the length of the leave
  const checkLeaveLength = () => {
    if (leaves.length > 0) {
      return true
    }
  }



  return (
    <>
      <TopBar />
      <section className={emdash.Employerdash}>
        <SideNav />
        <section className={emdash.employerdashboard}>
          <div className={emdash.employercardbox}>
            {/* WHAT RENDERS IN THE BROWSER */}
            <Employercard
              title="No. of Employees"
              count={employeeCount ? employeeCount : <Link to='/emd'>Add Employee</Link>}
              link='/employeemanagement'
            />

            <Employercard
              title="No. of Leaves"
              count={checkLeaveLength ? leaveCount : <Link to="leavemanagement">Add Leave</Link>}
              link='/leavemanagement'
            />


            <Employercard
              title="No. of Roles"
              count={roleCount ? roleCount : <Link to='/rolemgtdashb'>Add Role</Link>}
              link="/rolemgtdashb"
            />


            <Employercard
              title="No. of Levels"
              count={levelCount ? levelCount : <Link to='/levelmanagement'>Add Level</Link>}
              link='/levelmanagement'
            />
          </div>
          {/* <EmployerTable /> */}
          <Details />

        </section>

      </section>

    </>
  )
}

export default Employerdashboard