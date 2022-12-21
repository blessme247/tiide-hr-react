import * as yup from "yup";

// Create leave schema
export let CreateLeaveSchema = yup.object().shape({
    title: yup.string().required(),
    duration: yup.string().required(),
    description: yup.string().required(),
  });

// Create level schema
export let CreateLevelSchema = yup.object().shape({
  title: yup.string().required(),
  salary: yup.string().required(),
  description: yup.string().required(),
});