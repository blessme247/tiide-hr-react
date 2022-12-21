import * as yup from "yup";

//SignupSchema
export let SignupSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  password: yup
    .string()
    .min(8)
    .required("Password must contain at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Password must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  email: yup.string().email().required(),
  // confirmPassword: yup
  //   .string()
  //   .min(8)
  //   .required("Confirm Password must contain at least 8 characters")
  //   .oneOf([yup.ref("password"), null], "Passwords does not match"),
});

// SigninSchema
export let SigninSchema = yup.object().shape({
  password: yup
    .string()
    .min(8)
    .required("Password must contain at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Password must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  email: yup.string().email().required(),
});


// BusinessRegistrationSchema
export let BusinessRegistrationSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  address: yup.string().required(),
  rcno: yup.string().required(),
  cacno: yup.string().required(),
  taxid: yup.string().required(),
});


// ContactForm
export let ContactSchema = yup.object().shape({
  fullName: yup.string().required(),
  email: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
});
