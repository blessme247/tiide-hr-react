import * as yup from "yup";

// leave application schema
export let LeaveApplicationSchema = yup.object().shape({
    title: yup.string().required(),
    description: yup.string().required(),
    startDate: yup.date().required().nullable(),
    endDate: yup.date().required().nullable()
  });

  //nullable means the field can be set to null