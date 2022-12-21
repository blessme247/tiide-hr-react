import * as yup from "yup";

// Create role schema
export let CreateRoleSchema = yup.object().shape({
    title: yup.string().required('Title is Required'),
    description: yup.string().required('Description is Required'),
    //permissions
    
    manageRole: yup.boolean(),
    manageLevel: yup.boolean(),
    manageLeave: yup.boolean(),
    manageStaff: yup.boolean(),
    // manageNotification: yup.boolean(),
  });