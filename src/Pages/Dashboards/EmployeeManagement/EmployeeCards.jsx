import React from 'react'
// import { useSelector } from 'react-redux';
import emgCss from './employeeMgt.module.css';


import EmployeeTR from './EmployeeTR';

function EmployeeCards({ openForm, employeeData }) {
  // const { employeeData } = useSelector((state) => state.EmployeeManagementStore);

  return (
    <div className={emgCss.employeeDisplay}>
      <div className={emgCss.cardsTop}>
        <h2 className={emgCss.tableTitle}>Employee Management</h2>
        <button className='primary-button' onClick={openForm}>Add New Employee</button>
      </div>
      <table className={emgCss.employeeTable}>
        <thead>
          <tr>
            <td></td>
            <td>First Name</td>
            <td>Last Name</td>
            {/* <td>Position</td> */}
            <td>Email</td>
            {/* <td>Phone Number</td> */}
            {/* <td>Resumption</td> */}
            <td></td>
          </tr>
        </thead>
        <tbody>

          {employeeData ? employeeData.map((data, index) => {
            {/* console.log(data) */ }
            {/* console.log(typeof data) */ }
            const {
              firstName,
              lastName,
              roleId,
              email,
              /* staff  */
            } = data;
            /* const { startDate, id, dob } = staff; */
            return <EmployeeTR
              index={index + 1}
              key={index}
              firstName={firstName ? firstName : "no firstName"}
              lastName={lastName ? lastName : "no lastName"}
              roleId={roleId ? roleId : "no role id"}
              // startDate={startDate}
              email={email ? email : "no email"}
            // dob={dob}
            />
          }) : "No data to display"}

        </tbody>
      </table>
    </div>)
}

export default EmployeeCards