import React, { useState, useEffect } from 'react'
import SideNav from '../../../Components/Dashboard/SideNav/SideNav'
import TopBar from "../../../Components/Dashboard/TopBar/TopBar"
import RoleMgtMainSect from './RoleMgtMainSect'
import styles from "./RoleMgt.module.css"
// import AddNewRolePopup from './AddNewRolePopup'
import roleMgtServices from '../../../_Helper/_Redux/redux/RoleManagement/roleManagement.services'
import { useDispatch, useSelector } from 'react-redux'
import { loadRoles } from '../../../_Helper/_Redux/redux/RoleManagement/roleManagement.action'
import Popup from './Popup'



const RoleManagementDashboard = () => {
  // const {localToken, isLoading, setIsLoading, getRoles , setGetRoles} = props
  const [modalState, setModalState] = useState(false)

  const openModal = () => {
    setModalState(true)
  }

  const closeModal = () => {
    setModalState(false)
  }

  // const [roles, setRoles]= useState([])
  // Fetch the Roles when this component is mounted
  const dispatch = useDispatch();

  // load all the roles from the store
  // console.log(state)
  // load all the roles from backend and saves it to the redux store
  // roleMgtServices.fetchAllRoles().then((res) => {
  //   console.log("rm dash ", res)
  //   dispatch(loadRoles(res))
  // })

  const { roles } = useSelector((state) => state.RoleManagementStore);
  //  console.log(roles)

  useEffect(() => {
    // console.log("about to fetch")
    roleMgtServices.fetchAllRoles().then((res) => {
      // console.log("rm dash ", res)
      dispatch(loadRoles(res))
    })
    // console.log("After fetch")


  }, [])


  return (
    <>
      <TopBar />
      <section className={styles.roleManagement}>
        {modalState ?
          <><div className={styles.blur} onClick={closeModal}></div>
            {/* <AddNewRolePopup closeModal={closeModal} /> */}
            <Popup closeModal={closeModal} />

          </> : null}


        <SideNav />

        <section className={styles.roleMgtDashboard}>
          <RoleMgtMainSect
            openModal={openModal}
            // localToken={localToken}
            // isLoading={isLoading}
            // setIsLoading={setIsLoading}
            // getRoles ={getRoles}
            // setGetRoles={setGetRoles}
            roles={roles}
          />
        </section>
      </section>
    </>
  )
}

export default RoleManagementDashboard