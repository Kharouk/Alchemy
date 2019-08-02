import * as yup from "yup"

import {
  passwordNotLongEnough,
  emailNotLongEnough,
  invalidEmail
} from "./errorMessages"

export let registerPasswordValidation = yup
  .string()
  .min(6, passwordNotLongEnough)
  .max(255)

export let registerEmailValidation = yup
  .string()
  .min(6, emailNotLongEnough)
  .max(255)
  .email(invalidEmail)
