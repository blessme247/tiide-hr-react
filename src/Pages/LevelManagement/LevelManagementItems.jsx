import React from 'react'

import { FaEdit, FaRegTrashAlt } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { loadLevels } from '../../_Helper/_Redux/redux/LevelManagement/LevelMgt.action'
import levelServices from '../../_Helper/_Redux/redux/LevelManagement/LevelMgt.services'
import styles from './levelmanagement.module.css'

const LevelManagementItems = ({ index, setEditMode, setLevelToEdit, level, setIdToEdit }) => {
  const { title, salary, description, id } = level
  const dispatch = useDispatch();


  const handleDelete = (idtodelete) => {
    console.log(title)
    levelServices.deleteLevel(idtodelete).then((res) => {
      console.log(res)
      levelServices.getAllLevels().then((res) => {
        dispatch(loadLevels(res))
        console.log(res)
      })
    })
  }

  const handleEditMode = (level, idToEdit) => {
    setLevelToEdit(level);
    setIdToEdit(idToEdit);
    setEditMode(true);
  }

  return (
    <tr className={styles.tr}>
      <td className={styles.td}>{title}</td>
      <td className={styles.td}>{description}</td>
      <td className={styles.td}>{salary}</td>
      <td>
        <FaEdit className={styles.edit}
          onClick={() => handleEditMode(level, id)} />
        <FaRegTrashAlt className={styles.delete} onClick={() => handleDelete(id)} />
      </td>
    </tr>
  )
}

export default LevelManagementItems