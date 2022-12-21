import React from 'react'
import { useSelector } from 'react-redux'
import RoleMgtItems from './RoleMgtItems';




const RoleMgtTable = ({ setEditMode, setIdToEdit, setRoleToEdit, roles }) => {

  // const {roles} = useSelector((state) => state.roleManagementStore ) || [];
  // console.log(typeof roles, "rolemgttable")

  const allRoles = roles ? roles.map((role, index) => {
    // console.log("from rmt", role)
    return <RoleMgtItems
      key={role?.id}
      index={index + 1}
      setIdToEdit={setIdToEdit}
      role={role}
      setEditMode={setEditMode}
      setRoleToEdit={setRoleToEdit}
    />
  })
    : "No roles to load"
  return (
    <>

      <table>
        <thead>
          <tr>
            <th>
              Roles
            </th>
            <th>
              Description
            </th>
            {/* <th>
              Granted Access
            </th> */}
            {/* <th>
              Users
            </th> */}
            <th>
              Action
            </th>
          </tr>
        </thead>

        <tbody className='bodyTable'>
          {allRoles}
        </tbody>
      </table>


    </>
  )
}

export default RoleMgtTable