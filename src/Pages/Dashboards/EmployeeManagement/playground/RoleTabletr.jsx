import React from 'react'

function RoleTabletr({ classname, permissions, title, handleChange }) {
  return (
    <tr className={classname}>
      <td>{title}</td>
       <td>{<input type="checkbox"  name={permissions}  onChange={handleChange} />}</td>
      
      
      
    </tr>
  )
}

export default RoleTabletr