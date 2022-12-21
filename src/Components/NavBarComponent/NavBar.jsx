import React from 'react'
// import './navbar.css'
import styles from "./navbar.module.css";
import tiideHrLogo from '../../Assets/images/logo.png'
import { Link } from 'react-router-dom'
import {  FaBars, FaTimes } from 'react-icons/fa'
import NavigationDesktop from './NavigationDesktop';
import NavigationMobile from './NavigationMobile';

function NavBar() {
  return (

    <header  className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <div className={styles.logoWrapper}>
            <Link className={styles.logo} to="/">
              <img
                src={tiideHrLogo}
                alt="TIIDE HR logo"
                className={styles.logoImage}
              />
            </Link>
          </div>
          <div className={styles.navAside}>
            <NavigationDesktop />
            <NavigationMobile />

          </div>
        </nav>
      </div>
    </header>


  )
}

export default NavBar



// import React, { useState } from 'react'

// import SideNavLinks from './SideNavLinks'
// import sidenavstyle from './sidenav.module.css'
// import { FaAngleDoubleLeft, FaBars, FaTimes } from 'react-icons/fa'


// function SideNav() {

//   const [openNav, setOpenNav] = useState(true)

//   const handleClick = () => {
//     setOpenNav(!openNav)
//   }

//   const [hideNav, setHideNav] = useState(false)

//   const closeNav = () => {
//     setHideNav(!hideNav)
//   }



//   return (
//     <>
//       <div
//         onClick={closeNav}
//         className={sidenavstyle.opensidenavdiv}>
//         {hideNav ? <FaTimes
//           className={sidenavstyle.closesidenavbtn}
//         /> : <FaBars
//           className={sidenavstyle.opensidenavbtn} />
//         }

//       </div>

//       <div className={hideNav ? sidenavstyle.sidebar : sidenavstyle.closesidebar}>

//         <FaAngleDoubleLeft onClick={handleClick}
//           className={openNav ? sidenavstyle.togglenavbtn : sidenavstyle.togglenavbtnrotate} />
//         <>
//           <SideNavLinks navstate={openNav} />
//         </>
//       </div>
//     </>
//   )
// }

// export default SideNav