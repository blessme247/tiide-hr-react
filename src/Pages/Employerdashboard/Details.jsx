import React,{useState, useEffect} from 'react'
import { useSelector } from 'react-redux';
import levelServices from '../../_Helper/_Redux/redux/LevelManagement/LevelMgt.services';
import roleMgtServices from '../../_Helper/_Redux/redux/RoleManagement/roleManagement.services';
import styles from "./details.module.css"


const Details = () => {

     // get user level and role id from local storage
    const userData = JSON.parse(localStorage.getItem("userData")) || {};
    const userRoleId = userData.user.roleId; 
    // const userLevelId = userData.user.staff.levelId;

    // use state for the role and level of the user 
  const [userRole, setUserRole] = useState({})
  const [userLevel, setUserLevel] = useState({})

  // get the users role from the backend and set the state to the role gotten from backend
  useEffect(() => {
    roleMgtServices.getRoleById(userRoleId).then((res) => {
      setUserRole(res.data)
    })

    // levelServices.getLevelById(userLevelId).then((res)=>{
    //     setUserLevel(res.data.staff)
    // })
  }, [])
  

    const  {currentUser} = useSelector((state) => state.currentUserStore);
    let detail = currentUser.staff;
    let undefinedState = detail === undefined;
    

  return (
    <section className={styles.profileDetailsContainer}>
            <h4>Your Profile </h4>
            {/* <p className={styles.pageIntro}>Manage your business account.</p> */}
 
            <div className={styles.profileDetailsHeader}>
                <div className={styles.title}>
                    Name
                </div>  
                <div className={styles.profileDetails}>
                    {/* {`${currentUser?.firstName} ${currentUser.lastName}`} */}
                    {undefinedState ? "Loading..." : `${currentUser?.firstName} ${currentUser.lastName}`}
                </div>
            </div>
            
            <div className={styles.profileDetailsHeader}>
                <div className={styles.title}>
                    Email
                </div>  
                <div className={styles.profileDetails}>
                    {undefinedState ? "Loading..." : currentUser?.email}
                </div>
            </div>

            <div className={styles.profileDetailsHeader}>
                <div className={styles.title}>
                    Start Date
                </div>  
                <div className={styles.profileDetails}>
                    {undefinedState ? "Loading..." : detail?.startDate.slice(0, 10)}
                </div>
            </div>

            <div className={styles.profileDetailsHeader}>
                <div className={styles.title}>
                    Role
                </div>  
                <div className={styles.profileDetails}>
                    {undefinedState ? "Loading..." : userRole?.title}
                </div>
            </div>

            {/* <div className={styles.profileDetailsHeader}>
                <div className={styles.title}>
                    Level
                </div>  
                <div className={styles.profileDetails}>
                    {userLevel?.title}
                </div>
            </div> */}

           
        </section>
  )
}

export default Details