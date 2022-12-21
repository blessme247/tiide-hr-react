import React from 'react'
import { FaBackward, FaForward } from 'react-icons/fa'
import { FaPlusCircle } from 'react-icons/fa'


import emgCss from './employeeMgt.module.css';


const EmployeeMgtTop = ({ openmodal }) => {
  return (
    <div className={emgCss.top}>
      <h2>Employees</h2>
      <div className={emgCss.detials}>

        <FaPlusCircle className={emgCss.icon} onClick={openmodal} />
        <div className={emgCss.topscroll}>

          <FaBackward className={emgCss.icon} />

          <FaForward className={emgCss.icon} />

        </div>
        <p>Showing: <span>0</span> - <span>0</span> of <span>0</span> </p>
      </div>

      <button className="primary-button">Add New Employee</button>
    </div>
  )
}

export default EmployeeMgtTop 