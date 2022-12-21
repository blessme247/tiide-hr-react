import React from 'react'
import { FaCheck, FaEdit, FaTrashAlt } from 'react-icons/fa'
import tdcss from "./todoicon.module.css"

const TodoIcons = () => {
  return (
    <div className={tdcss.todoicons}>
        <FaCheck  className={tdcss.icons}/>
        <FaTrashAlt className={tdcss.icons}/>
        <FaEdit className={tdcss.icons}/>

    </div>
  )
}

export default TodoIcons