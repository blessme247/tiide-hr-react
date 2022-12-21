import React from 'react'
import { Link } from 'react-router-dom'

import sty from './sidenavbtn.module.css'

const SideNavBtn = ({ openNav, title, iconName, link, func }) => {
  // console.log(typeof openNav)
  return (
    <Link to={link} className={sty.butn} onClick={func}>
      <div className={sty.icons}>
        {iconName}
      </div>
      {openNav === true ? <p className={sty.title}>{title}</p> : ""}
    </Link>
  )
}

export default SideNavBtn
