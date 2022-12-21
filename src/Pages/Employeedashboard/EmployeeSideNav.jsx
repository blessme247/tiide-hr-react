import React, { useState } from 'react'
import sidenavstyle from '../../Components/Dashboard/SideNav/sidenav.module.css'
import { FaAngleDoubleLeft, FaBars, FaTimes } from 'react-icons/fa'
import EmployeeNavLinks from './EmployeeNavLinks'



const EmployeeSideNav = () => {

        const [openNav, setOpenNav] = useState(true)
      
        const handleClick = () => {
          setOpenNav(!openNav)
        }
      
        const [hideNav, setHideNav] = useState(false)
      
        const closeNav = () => {
          setHideNav(!hideNav)
        }
      
      
      
        return (
          <>
            <div
              onClick={closeNav}
              className={sidenavstyle.opensidenavdiv}>
              {hideNav ? <FaTimes
                className={sidenavstyle.closesidenavbtn}
              /> : <FaBars
                className={sidenavstyle.opensidenavbtn} />
              }
      
            </div>
      
            <div className={hideNav ? sidenavstyle.sidebar : sidenavstyle.closesidebar}>
      
              <FaAngleDoubleLeft onClick={handleClick}
                className={openNav ? sidenavstyle.togglenavbtn : sidenavstyle.togglenavbtnrotate} />
              <>
                <EmployeeNavLinks navstate={openNav} />
              </>
            </div>
          </>
        )
}

export default EmployeeSideNav