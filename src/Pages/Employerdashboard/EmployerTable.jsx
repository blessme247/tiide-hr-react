import React from 'react'
import "../../Components/Dashboard/tablecomponent.css"
import emdash from "./employerdash.module.css"
import Button from './Button'



const EmployerTable = () => {
  return (
    <div className={emdash.employertablesection}>
      <div className={emdash.leavetext}>
        <h4 className={emdash.leavesapplied}>Recent Leaves applied</h4>
      </div>
      <div className={emdash.employertable}>
        <div>
          <table>
            <thead>
              <tr>
              <td>
                Type
              </td>
              <td>
                Duration
              </td>
              <td>
                Description
              </td>
              </tr>
            </thead>
          </table>

        </div>

      </div>

      {/* <Button /> */}


    </div>
  )
}

export default EmployerTable