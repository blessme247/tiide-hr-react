import React from 'react'

import { FaEdit, FaRegTrashAlt } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { loadRoles } from '../../../_Helper/_Redux/redux/RoleManagement/roleManagement.action'
import roleMgtServices from '../../../_Helper/_Redux/redux/RoleManagement/roleManagement.services'
import styles from './RoleMgt.module.css'

const RoleMgtItems = ({ index, setEditMode, setRoleToEdit, role, setIdToEdit }) => {
  const { title, description, id } = role
  const dispatch = useDispatch();


  const handleDelete = (idtodelete) => {
    console.log(title)
    roleMgtServices.deleteRole(idtodelete).then((res) => {
      console.log(res)
      roleMgtServices.fetchAllRoles().then((res) => {
        dispatch(loadRoles(res))
        console.log(res)
      })
    })
  }

  const handleEditMode = (role, idToEdit) => {
    setRoleToEdit(role);
    setIdToEdit(idToEdit);
    setEditMode(true);
  }

  return (
    <tr className={styles.tr}>
      <td className={styles.td}>{title}</td>
      <td className={styles.td}>{description}</td>
      {/* <td className={styles.td}>{}</td> */}
      <td>
        <FaEdit className={styles.edit}
          onClick={() => handleEditMode(role, id)} />
        <FaRegTrashAlt className={styles.delete} onClick={() => handleDelete(id)} />
      </td>
    </tr>
  )
}

export default  RoleMgtItems