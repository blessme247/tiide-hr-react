import React from 'react'
import { FaPlusCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import emdash from "./employerdash.module.css"


// DESTRUCTURING
const Employercard = ({ title, count, link }) => {
  return (
    <section className={emdash.contentboxes}>
      <div className={emdash.plusicon}>
        <Link to={link}><FaPlusCircle /></Link>
      </div>
      <h5 className={emdash.title}>{title}</h5>

      <div className={emdash.leavecounter}>
        <div className={emdash.leavecount}>{count}</div>
      </div>
    </section >

  )
}

export default Employercard