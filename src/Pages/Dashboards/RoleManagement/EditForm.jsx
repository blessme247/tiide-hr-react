import React, { useEffect, useState } from "react";
import { Formik, Field, Form } from "formik";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import anrCss from './addNewRolecss.module.css'
import roleMgtServices from "../../../_Helper/_Redux/redux/RoleManagement/roleManagement.services";
import { loadRoles } from "../../../_Helper/_Redux/redux/RoleManagement/roleManagement.action";
import RoleTabletr from "../EmployeeManagement/playground/RoleTabletr";
import { CreateRoleSchema } from "../../utils/validation/rolemgt-schema";
import fetchAllRoles from "../../../_Helper/_Redux/redux/RoleManagement/roleManagement.services"
import { getToken } from "../../../_Helper/_Redux/Services/globalUtil";


function EditForm({roleToEdit, setEditMode, idToEdit,}) {
  const {title, description} = roleToEdit;
  
  const {access} =getToken();
  const {roles} = useSelector(state=>state.RoleManagementStore); 
 
  const dispatch = useDispatch();
  
  const closeModal = () => {
    setEditMode(false)
  };

  
  const [token, setToken] = useState(false);
  useEffect(() => {
    if (access) {
      setToken(true);
    }
  }, [access]);

  const initialValues = {
    title: title,
    description: description,
  }

  return (
    <>
      <Formik
        initialValues={ initialValues  }
        validationSchema={CreateRoleSchema}
        enableReinitialize
        onSubmit={ (values, { setSubmitting, resetForm }) => {
          const { title, description } = values;
          setSubmitting(true);


          roleMgtServices.editRole(idToEdit, values).then((response)=>{
            fetchAllRoles(access).then((response) => {
                dispatch(loadRoles(response))
                console.log("edit", response)
                toast.success("Role Updated Successfully", {position: "top-center"})
            })
            resetForm()
            setEditMode()
             return response
           }).catch((error)=>{
             toast.error("Unable to update role, please try again")
           })
            

        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          handleReset,
          isSubmitting,
        }) => (
          <React.Fragment>

                <div className={anrCss.popupContainer}>
                <h4 className={anrCss.popupTitle}>Edit Role</h4>
                <Form >
                {/* className={anrCss.rolespopForm} */}
                <div className={anrCss.formgroup}>
                    <label htmlFor='title' className={anrCss.inputTitle}>Title</label>
                    <input name='title' type="text" value={values.title} onChange={handleChange}/>
                    {errors.title && touched.title ? <div className={anrCss.errorMessage}>{errors.title}</div> : null }
                </div>
                     
                <div className={anrCss.formgroup}>
                    <label htmlFor='description' className={anrCss.inputTitle}>Description</label>
                    <Field as="textarea" name='description' placeholder="Type Description..." value ={values.description} onChange={handleChange} />
                   {errors.description && touched.description ? <div className={anrCss.errorMessage}>{errors.description}</div> : null }
            </div>

            <table className={anrCss.roleTable}>
              <thead>
                <tr className={anrCss.theadrow}>
                  <td> Access</td>
                  <td> Grant Access</td>
                
                </tr>
              </thead>
              <tbody>
                <RoleTabletr classname={anrCss.tbodyrow} permissions="manageRole"  title="Role Management" handleChange={handleChange}/>
                <RoleTabletr classname={anrCss.tbodyrow} permissions="manageLevel" title="Level Management" handleChange={handleChange}/>
                <RoleTabletr classname={anrCss.tbodyrow} permissions="manageLeave"  title="Leave Management" handleChange={handleChange}/>
                <RoleTabletr classname={anrCss.tbodyrow} permissions="manageStaff"  title="Employee Management" handleChange={handleChange}/>
                {/* <RoleTabletr classname={anrCss.tbodyrow} permissions="manageNotification"  title="Notification Management" handleChange={handleChange}/> */}
                
              </tbody>
            </table>

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
                        Update
                      </button>
                    </section>
                
                </Form>
                </div>
          </React.Fragment>
        )}
      </Formik>
    </>
  );
}

export default EditForm;
