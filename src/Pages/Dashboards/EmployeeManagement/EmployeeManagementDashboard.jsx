import React, { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import SideNav from '../../../Components/Dashboard/SideNav/SideNav';
import TopBar from '../../../Components/Dashboard/TopBar/TopBar';
import { loadEmployee } from '../../../_Helper/_Redux/redux/EmployeeManagement/employeemanagement.action';
import employeeManagementServices from '../../../_Helper/_Redux/redux/EmployeeManagement/employeemanagement.services';
import { loadLevels } from '../../../_Helper/_Redux/redux/LevelManagement/LevelMgt.action';
import levelServices from '../../../_Helper/_Redux/redux/LevelManagement/LevelMgt.services';
import { loadRoles } from '../../../_Helper/_Redux/redux/RoleManagement/roleManagement.action';
import roleMgtServices from '../../../_Helper/_Redux/redux/RoleManagement/roleManagement.services';
import AddNewEmployeeFormik from './AddNewEmployeeFormik';
import EmployeeCards from './EmployeeCards';

import emgCss from './employeeMgt.module.css';


function EmployeeManagementDashboard({ localToken }) {
  //bringing in all the employees from the store
  const { employeeData } = useSelector((state) => state.EmployeeManagementStore);
  const { allLevels } = useSelector((state) => state.LevelManagementStore);
  const { roles } = useSelector((state) => state.RoleManagementStore);
  const dispatch = useDispatch()


  // load all resources needed for the form. that is the levels, roles and employee details.
  useEffect(() => {
    employeeManagementServices.getEmployee().then((data) => {
      // console.log(data)
      dispatch(loadEmployee(data))
    })
    levelServices.getAllLevels().then((levels) => {
      dispatch(loadLevels(levels))
    })
    roleMgtServices.fetchAllRoles().then((data) => {
      // console.log("roles", data)
      dispatch(loadRoles(data))
    })
  }, [])


  const [modalState, setModalState] = useState(false)

  const openModal = () => {
    setModalState(true)
  }

  const closeModal = () => {
    setModalState(false)
  }

  return (
    <>
      <TopBar />
      <section className={emgCss.employeeMgt} >
        {modalState ?
          <><div className={emgCss.blur} onClick={closeModal}></div>
            <div className={emgCss.emgformpopup}>
              <FaTimes className={emgCss.close} onClick={closeModal} />
              <AddNewEmployeeFormik allLevels={allLevels} roles={roles} closeModal={closeModal} />
            </div> </> : null}


        <SideNav />
        <section className={emgCss.employeeMgtDashboard}>
          <EmployeeCards employeeData={employeeData} openForm={openModal} />

          {/*  */}
        </section>
      </section>
      {/* <AddEmployeeModal /> */}
    </>
  );
};

export default EmployeeManagementDashboard



// [
//   {
//     "access": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTY2ODYwMDkyMCwiZXhwIjoxNjcwNDAwOTIwLCJ0eXBlIjoiYWNjZXNzIn0.MaDfXjY2vBuMYiOi2psIcqSnWS4wLc5BY3S7X2TwFI8"
//   },
//   {
//     "refresh": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTY2ODYwMDkyMCwiZXhwIjoxNjcxMTkyOTIwLCJ0eXBlIjoicmVmcmVzaCJ9.pNJy-SERcRwwqsSf4iY9Yi4HFu03vlqbIyqanEjyzpk"
//   }
// ]