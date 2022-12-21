import React from 'react'
import { Link } from 'react-router-dom'
import sidenavlinksstlye from './sidenavlink.module.css'



function SideNavLink({ icon, title, navstate, link, func }) {


  return (
    <Link to={link} onClick={func}>
      <label className={sidenavlinksstlye.label}>
        <i className={sidenavlinksstlye.i}>{icon}</i>
        {navstate && <p>{title}</p>}
      </label>
    </Link>
  )
}

export default SideNavLink