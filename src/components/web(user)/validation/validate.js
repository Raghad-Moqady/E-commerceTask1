
import * as yup from 'yup';

export const validationSchema= yup.object({
  userName:yup.string().required("user name is required").min(3,"userName must be at least 3 character").max(30,"max is 30"),
  email:yup.string().required("email is required").email() ,
  password:yup.string().required("password is required").min(3,"password must be at least 3 digits").max(30,"max is 30")
})
