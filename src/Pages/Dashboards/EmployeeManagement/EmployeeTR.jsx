import React from 'react'
import emgCss from './employeeMgt.module.css';

const EmployeeTR = ({ firstName, lastName, roleId, email, phoneNumber, index }) => {
  //staff sub ibjct has been removed until fix is done
  return (
    <tr className={emgCss.tablerow}>
      <td className={emgCss.name}>{index}</td>
      <td className={emgCss.name}>{firstName}</td>
      <td>{lastName}</td>
      {/* <td>{roleId}</td> */}
      <td>{email}</td>
      {/* <td>{phoneNumber}</td> */}
      {/* <td>startDate</td> */}
      <td><button className="primary-button">Edit</button></td>
    </tr>
  )
}

export default EmployeeTR