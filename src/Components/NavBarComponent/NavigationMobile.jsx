import React from "react";
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
import { MdOutlineMenuOpen } from "react-icons/md";
import { CgCloseO } from "react-icons/cg";
import { useState } from "react";
import NavigationMobileLinks from "./NavigationMobileLinks";

const NavigationDesktop = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const hamburgerIcon = (
    <MdOutlineMenuOpen
      className={styles.hamburger}
      size="35px"
      color="#000080"
      onClick={handleClick}
    />
  );

  const closeIcon = (
    <CgCloseO
      className={styles.hamburger}
      size="35px"
      color="#000080"
      onClick={handleClick}
    />
  );

  return (
    <>
      <div className="navigationMobileWrapper">
        {open && <NavigationMobileLinks /> }
        {/* <NavigationMobileLinks className = {open ? styles.navigationMobileOpen : styles.navigationMobile}> </NavigationMobileLinks> */}
        {/* className={openNav ? sidenavstyle.togglenavbtn : sidenavstyle.togglenavbtnrotate} /> */}

        {open ? closeIcon : hamburgerIcon}
        {open ? closeIcon : hamburgerIcon}
      </div>
    </>
  );
};

export default NavigationDesktop;
