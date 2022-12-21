import { Formik } from 'formik';
// import React, { useState } from 'react'
// import { Form } from 'react-router-dom';
import stylez from "./quickstyling.module.css"
import RoleTabletr from './RoleTabletr';

function PopusPlayground() {

  return (


    <Formik

      initialValues={{
        roleTitle: "",
        desc: "",
        checked: [],
      }}
      onSubmit={(values) => alert(JSON.stringify(values, null, 2))}

    >

      {({ values }) => (
        <form className={stylez.rolespopform}>
          <div className={stylez.formgroup}>
            <label htmlFor='roleTitle'>Role Title</label>
            <input name='roleTitle' type="text" />
          </div>

          <div className={stylez.formgroup}>
            <label htmlFor='roleDesc'>Role Description</label>
            <textarea name='roleDesc' />
          </div>
          <table className={stylez.roleTable}>
            <thead>
              <tr className={stylez.theadrow}>
                <td>Access</td>
                <td>Create</td>
                <td>View</td>
                <td>Edit</td>
                <td>Delete</td>
              </tr>
            </thead>
            <tbody>
              <RoleTabletr classname={stylez.tbodyrow} groupName="roleaccess" title="Role Management" />
              <RoleTabletr classname={stylez.tbodyrow} groupName="levelaccess" title="Level Management" />
              <RoleTabletr classname={stylez.tbodyrow} groupName="leaveaccess" title="Leave Management" />
              <RoleTabletr classname={stylez.tbodyrow} groupName="employeeaccess" title="Employee Management" />
              <RoleTabletr classname={stylez.tbodyrow} groupName="notificationaccess" title="Notification Management" />
            </tbody>
          </table>
          <button className="primary-button" type="submit">Save</button>
        </form>
      )}
    </Formik>
  )

}

export default PopusPlayground

