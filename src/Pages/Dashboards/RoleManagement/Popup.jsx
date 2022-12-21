import { Formik, Field, Form } from 'formik'
// import { toast } from "react-toastify"
import React from 'react'
// import { FaTimes } from 'react-icons/fa'
import { CreateRoleSchema } from '../../utils/validation/rolemgt-schema'
import RoleTabletr from '../EmployeeManagement/playground/RoleTabletr'
import anrCss from './addNewRolecss.module.css'
// import axiosInstance from "../../../_Helper/_Redux/AxiosConfig/axiosConfig";
// import { getToken } from '../../../_Helper/_Redux/Services/globalUtil'
import { useDispatch } from 'react-redux'
import { createNewRole, loadRoles } from '../../../_Helper/_Redux/redux/RoleManagement/roleManagement.action'
// import fetchRoles from './getRoles'
import roleMgtServices from '../../../_Helper/_Redux/redux/RoleManagement/roleManagement.services'
import { toast } from "react-toastify";

function Popup({ closeModal }) {
  const dispatch = useDispatch();
  return (

    <div className={anrCss.addnewrolecontainer}>

      <Formik

        initialValues={{
          title: "",
          description: "",
          manageRole: false,
          manageLevel: false,
          manageLeave: false,
          manageStaff: false,
          // manageNotification: false,          
        }}

        validationSchema={CreateRoleSchema}

        //NOTE: whenever you want to do edit button, remember to set enableReinitialize to true
        // onSubmit={ async (values, {setSubmitting}) => alert(JSON.stringify(values, null, 2))}


        onSubmit={async (values, { setSubmitting, resetForm }) => {

          values.permissions = {
            manageLeave: values.manageLeave,
            manageLevel: values.manageLevel,
            manageRole: values.manageRole,
            manageStaff: values.manageStaff
          }


          setSubmitting(true);
          // debugger;
          roleMgtServices.addNewRole(values).then((res) => {
            console.log("1st ", res)
            // dispatch(createNewRole(values))
            roleMgtServices.fetchAllRoles().then((res) => {
              console.log("2nd ", res)
              // debugger;
              dispatch(loadRoles(res))
              toast.success(
                "Role    Created Successfully",
                {
                  position: "top-center",
                }
              );
            })

            resetForm();
            closeModal();
          }).catch((error) => {
            toast.success(
              "Unable to create role, please try again",
              {
                position: "top-center",
              }
            );
          })
          // .then((res)=>{
          //     roleMgtServices.fetchAllRoles().then((res) =>{
          //         dispatch(loadRoles(res))
          //     })
          // }) 
        }}
      >

        {({ values,
          errors,
          touched,
          handleSubmit,
          handleChange,
          handleReset,
          isSubmitting
        }) => (
          <>
            <h4 className={anrCss.popupTitle}>Create Role</h4>
            <Form className={anrCss.rolespopform}>
              <pre>{JSON.stringify(errors, 2, null)}</pre>
              <pre>{JSON.stringify(values, 2, null)}</pre>
              <div className={anrCss.formgroup}>
                <label htmlFor='title' className={anrCss.inputTitle}>Title</label>
                <input name='title' type="text" value={values.title} onChange={handleChange} />
                {errors.title && touched.title ? <div className={anrCss.errorMessage}>{errors.title}</div> : null}
              </div>

              <div className={anrCss.formgroup}>
                <label htmlFor='description' className={anrCss.inputTitle}>Description</label>
                <Field as="textarea" name='description' placeholder="Type Description..." value={values.description} onChange={handleChange} />
                {errors.description && touched.description ? <div className={anrCss.errorMessage}>{errors.description}</div> : null}
              </div>
              <table className={anrCss.roleTable}>
                <thead>
                  <tr className={anrCss.theadrow}>
                    <td> Access</td>
                    <td> Grant Access</td>

                  </tr>
                </thead>
                <tbody>
                  <RoleTabletr classname={anrCss.tbodyrow} permissions="manageRole" title="Role Management" handleChange={handleChange} />
                  <RoleTabletr classname={anrCss.tbodyrow} permissions="manageLevel" title="Level Management" handleChange={handleChange} />
                  <RoleTabletr classname={anrCss.tbodyrow} permissions="manageLeave" title="Leave Management" handleChange={handleChange} />
                  <RoleTabletr classname={anrCss.tbodyrow} permissions="manageStaff" title="Employee Management" handleChange={handleChange} />
                  {/* <RoleTabletr classname={anrCss.tbodyrow} permissions="manageNotification"  title="Notification Management" handleChange={handleChange}/> */}

                </tbody>
              </table>
              {/* <div className={anrCss.mid}>
              <button className="primary-button" type="submit">Save</button></div> */}

              <section className={anrCss.submitButtons}>
                <button
                  className={anrCss.secondaryBtn}
                  type="button"
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button
                  className={`${anrCss.primaryBtn} ${anrCss.saveButton}`}
                  type="button"
                  onClick={handleSubmit}
                >
                  Save
                </button>
              </section>
            </Form>
          </>
        )}
      </Formik>
    </div>
  )
}

export default Popup;