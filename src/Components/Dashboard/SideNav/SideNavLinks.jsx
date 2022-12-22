import React, { useEffect, useState } from 'react';
// import SideNavLink from './SideNavLink'
import {
  FaAddressCard,
  FaBed,
  FaBell,
  FaLayerGroup,
  FaSignOutAlt,
  FaTable,
  FaToolbox,
} from 'react-icons/fa'
// import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import roleMgtServices from '../../../_Helper/_Redux/redux/RoleManagement/roleManagement.services';
import userServices from '../../../_Helper/_Redux/redux/User/user.services';
import SideNavBtn from './SideNavBtn';


function SideNavLinks({ openNav }) {
  const navigate = useNavigate();

  // get user role id from local storage
  const userData = JSON.parse(localStorage.getItem("userData"));
  const userRoleId = userData.user.roleId;

  // use state for the role of the user 
  const [userRole, setUserRole] = useState({})

  // get the users role from the backend and set the state to the role gotten from backend
  useEffect(() => {
    roleMgtServices.getRoleById(userRoleId).then((res) => {
      setUserRole(res.data.permissions)
    })
  }, [])


  // to check if a user's role id has the required access to see a nav item
  const checkNavAccess = userRole.length ? userRole.map((role) => {

    // if role access return the role access element
    if (role.value === "manageRole") {
      return <SideNavBtn openNav={openNav} title="Role" iconName={<FaToolbox />} link="/rolemgtdashb" />
    }
    // if role access return the leave access element
    if (role.value === "manageLeave") {
      return <SideNavBtn openNav={openNav} title="Leave" iconName={<FaBed />} link="/leavemanagement" />
    }
    // if role access return the level access element
    if (role.value === "manageLevel") {
      return <SideNavBtn openNav={openNav} title="Level" iconName={<FaLayerGroup />} link="/levelmanagement" />
    }
    // if role access return the staff access element
    if (role.value === "manageStaff") {
      return <SideNavBtn openNav={openNav} title="Employee" iconName={<FaAddressCard />} link="/employeemanagement" />
    }

    return [];
  }) : {}


  const handleLogout = () => {
    userServices.logOut().then((response) => {

      navigate("/");
      toast.success("Logout Successful", { position: "top-center" });
    }).catch((error) => {
      toast.success("Logout failed, please try again", { position: "top-center" });
    });
  };

  return (
    <>
      <SideNavBtn openNav={openNav} title="Dashboard" iconName={<FaTable link="/dashboard" />} />
      {/* {rolePermission ?  */}
      {/* <SideNavBtn openNav={openNav} title="Role" iconName={<FaToolbox />} link="/rolemgtdashb" /> */}
      {/* : null} */}
      {/* {levelPermission ?  */}
      {/* <SideNavBtn openNav={openNav} title="Level" iconName={<FaLayerGroup />} link="/levelmanagement" /> */}
      {/* : null} */}
      {/* {leavePermission ?  */}
      {/* <SideNavBtn openNav={openNav} title="Leave" iconName={<FaBed />} link="/leaveapplication" /> */}
      {/* : null} */}
      {/* {employeePermission ?  */}
      {/* <SideNavBtn openNav={openNav} title="Employee" iconName={<FaAddressCard />} link="/employeemanagement" /> */}
      {/* : null} */}
      {/* render the side nav items to the dash board if they exist */}
      {checkNavAccess[0] ? checkNavAccess[0] : ""}
      {checkNavAccess[1] ? checkNavAccess[1] : ""}
      {checkNavAccess[2] ? checkNavAccess[2] : ""}
      {checkNavAccess[3] ? checkNavAccess[3] : ""}
      <SideNavBtn openNav={openNav} title="Notification" iconName={<FaBell />} link="/notifications" />
      <SideNavBtn openNav={openNav} title="Signout" iconName={<FaSignOutAlt />} link="/" func={handleLogout} />
    </>
  );
};

export default SideNavLinks;