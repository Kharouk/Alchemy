import * as yup from "yup"

import {
  registerPasswordValidation,
  registerEmailValidation
} from "./utils/yupSchemas"

export const loginValidationSchema = yup.object().shape({
  email: registerEmailValidation,
  password: registerPasswordValidation,
  rememberMe: yup.bool().default(false)
})
