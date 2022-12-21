import React from 'react'
import { FaUserAlt } from 'react-icons/fa'
import addEmpModcss from './AddEmployeeModal.module.css'

function AddEmployeeModal() {
  return (
    <form className={addEmpModcss.AddEmployeeModalForm}>

      <div className={addEmpModcss.profile}>

        <div className={addEmpModcss.soloInput}>
          <div>
            <label htmlFor='firstName' className={addEmpModcss.inputTitle}>First Name</label>
            <input type="text" id='firstName' name='firstName' />
          </div>

          <div>
            <label htmlFor='lastName' className={addEmpModcss.inputTitle}>Last Name</label>
            <input type="text" id='lastName' name='lastName' />
          </div>
        </div>
        <label className='imgUpload' htmlFor='uploadImg'>
          <FaUserAlt className='icon' />
          <input type="file" className="uploadImg" />
          <h5>upload profile picture</h5>
        </label>
      </div>


      <div className='form-group'>
        <div className="form-subgroup">

          <label htmlFor='emailAddress' className={addEmpModcss.inputTitle}>Email</label>
          <input type="mail" id='emailAddress' name='emailAddress' />
        </div>
        <div className="form-subgroup">

          <label htmlFor='phoneNumber' className={addEmpModcss.inputTitle}>Phone Number</label>
          <input type="tel" id='phoneNumber' name='phoneNumber' />
        </div>
      </div>
      <div className='form-group'>
        <div className="form-subgroup">

          <label htmlFor='level' className={addEmpModcss.inputTitle}>Level</label>
          <select id='level' name='level'>
            <option>Select an option</option>
          </select>
        </div>
        <div className="form-subgroup">

          <label htmlFor='role' className={addEmpModcss.inputTitle}>Role</label>
          <select id='role' name='role'>
            <option>Select an option</option>
          </select>
        </div>
      </div>

    </form>
  )
}

export default AddEmployeeModal