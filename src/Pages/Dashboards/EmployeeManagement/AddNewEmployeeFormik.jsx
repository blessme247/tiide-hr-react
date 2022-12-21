import { Formik, ErrorMessage } from 'formik';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addEmployee, loadEmployee } from '../../../_Helper/_Redux/redux/EmployeeManagement/employeemanagement.action';
import employeeManagementServices from '../../../_Helper/_Redux/redux/EmployeeManagement/employeemanagement.services';
import addEmpModcss from './AddEmployeeModal.module.css'
import * as Yup from "yup";


function AddNewEmployeeFormik({ closeModal }) {
  const dispatch = useDispatch()

  const { allLevels } = useSelector((state) => state.LevelManagementStore);
  const { roles } = useSelector((state) => state.RoleManagementStore);

  const levelOptions = allLevels.map((levelId) => {
    const { id, title } = levelId
    return <option key={id} value={id}>{title}</option>
  })

  const roleOption = roles.map((role) => {
    const { id, title } = role
    return <option key={id} value={id}>{title}</option>
  })

  const EmployeeMgtSchema = Yup.object().shape({
    firstName: Yup.string().required("* required"),
    lastName: Yup.string().required("* required"),
    email: Yup.string().email().required("* required"),
    // roleId: Yup.string().email().required("* required"),
    // levelId: Yup.number().required("* required").oneOf(allLevels.id),
    // phoneNum: Yup.tel().required("* required"),
    startDate: Yup.date().required("* required"),
    dob: Yup.date().required("* required"),

  });

  const renderError = (message) => <p className={addEmpModcss.errMsg}> {message}</p>;
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        // photo: '',
        roleId: '',
        levelId: '',
        startDate: '',
        dob: '',
        // phoneNumber: ''
      }}
      validationSchema={EmployeeMgtSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        employeeManagementServices.addNewEmployee(values).then((res) => {
          console.log(res);
          dispatch(addEmployee(res));
        }).then((res) => {
          console.log("get to dispatch")
          employeeManagementServices.getEmployee()
            .then((data) => {
              dispatch(loadEmployee(data))
            })
          console.log("after dispatch")
        })
        console.log("outside on submit")
        resetForm();
        closeModal();
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
      }) =>

      (<form className={addEmpModcss.AddEmployeeModalForm} >

        {/* <div className={addEmpModcss.formgroup}>
            <label htmlFor="photo" className={addEmpModcss.imglabel}>Img Upload</label>
            <input
              id="photo"
              name="photo"
              type="file"
              accept='image/*'
              className={addEmpModcss.uploadImg}
            />
          </div> */}



        <div className={addEmpModcss.formgroup}>
          <div className={addEmpModcss.formgrouptop}>
            <label htmlFor="firstName">First Name</label>
            <ErrorMessage name="firstName" render={renderError} />
          </div>
          <input
            name="firstName"
            placeholder="Jane"
            value={values.firstName}
            onChange={handleChange}
            required
          />

        </div>

        <div className={addEmpModcss.formgroup}>
          <div className={addEmpModcss.formgrouptop}>
            <label htmlFor="lastName">Last Name</label>
            <ErrorMessage name="lastName" render={renderError} />
          </div>

          <input
            name="lastName"
            placeholder="Doe"
            value={values.lastName}
            onChange={handleChange}
            required
          />

        </div>



        {/* <div className={addEmpModcss.supformgroup}> */}
        <div className={addEmpModcss.formgroup}>
          <div className={addEmpModcss.formgrouptop}>
            <label htmlFor="email">Email Address</label>
            <ErrorMessage name="email" render={renderError} />
          </div>
          <input
            name="email"
            placeholder="jane@acme.com"
            type="email"
            value={values.email}
            onChange={handleChange}
            required
          />

        </div>

        {/* <div className={addEmpModcss.formgroup}>
        <div className={addEmpModcss}><addEmpModcss.        <div className={addEmpModcss}><addEmpModcss./div>top/d
            <label htmlFor="phoneNum">Phone Number</label>
        iv>
            <input
              name="phoneNum"
              placeholder="080-1234-4567"
              type="tel"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              value={values.phoneNumber}
              onChange={handleChange}
              required

            />
          </div> */}
        {/* </div> */}
        {/* <div className={addEmpModcss.supformgroup}> */}
        <div className={addEmpModcss.formgroup}>
          <div className={addEmpModcss.formgrouptop}>
            <label htmlFor='roleId'>Select Role</label>
            <ErrorMessage name="roleId" render={renderError} />
          </div>
          <select id='roleId' name='roleId' onChange={handleChange} value={values.roleId}>
            <option value="">Select Role</option>
            {roleOption}
          </select>

        </div>

        <div className={addEmpModcss.formgroup}>
          <div className={addEmpModcss.formgrouptop}>
            <label htmlFor='levelId'>Select Level</label>
            <ErrorMessage name="levelId" render={renderError} />
          </div>
          <select id='levelId' name='levelId' onChange={handleChange} value={values.levelId}>
            <option value="">Select Level</option>
            {levelOptions}
          </select>

        </div>
        {/* </div> */}

        {/* <div className={addEmpModcss.supformgroup}> */}
        <div className={addEmpModcss.formgroup}>
          <div className={addEmpModcss.formgrouptop}>
            <label htmlFor='dob'>Date of Birth</label>
            <ErrorMessage name="dob" render={renderError} />
          </div>
          <input
            name="dob"
            type="date"
            value={values.dob}
            onChange={handleChange}
          />

        </div>

        <div className={addEmpModcss.formgroup}>
          <div className={addEmpModcss.formgrouptop}>
            <label htmlFor='startDate'>Resumption Date</label>
            <ErrorMessage name="startDate" render={renderError} />
          </div>
          <input
            name="startDate"
            type="date"
            value={values.startDate}
            onChange={handleChange}
          />

        </div>
        {/* </div> */}

        <div className={addEmpModcss.buttoncont}>
          <button type="submit" className='primary-button' onClick={handleSubmit} >Submit</button>
        </div>
      </form>)}
    </Formik >
  )

}

export default AddNewEmployeeFormik
