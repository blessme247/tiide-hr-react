import React from 'react'
import SideNavLink from '../../Components/Dashboard/SideNav/SideNavLink'


import {
    FaAddressCard,
    FaBed,
    FaBell,
    FaLayerGroup,
    FaSignOutAlt,
    FaTable,
    FaToolbox,
  } from 'react-icons/fa'
  

const EmployeeNavLinks = ({navstate}) => {
    const navItems = [
        {
          title: "Dashboard",
          icon: <FaTable />,
        },
        {
          title: "Notification",
          icon: <FaBell />,
        },
        {
          title: "Signout",
          icon: <FaSignOutAlt />,
        },
    
      ]
    
    
    
      return (
        navItems.map((item, index) => {
          return <SideNavLink key={index} icon={item.icon} title={item.title} navstate={navstate} />
        })
      )
    
    }
    

export default EmployeeNavLinks