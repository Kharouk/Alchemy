import React from "react"
import { Form, Icon, Input, Button, Checkbox } from "antd"
import { withFormik, FormikErrors, FormikProps } from "formik"
import { loginValidationSchema } from "../schemas/formSchema"
import styled from "styled-components"

const FormItem = Form.Item

const Wrapper = styled.div`
  max-width: 700px;
`

interface FormValues {
  email: string
  password: string
  rememberMe: boolean
}

interface Props {
  submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>
}

class FormComponent extends React.PureComponent<
  FormikProps<FormValues> & Props
> {
  render() {
    const {
      values,
      handleChange,
      handleBlur,
      handleSubmit,
      touched,
      errors
    } = this.props
    return (
      <form
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
        onSubmit={handleSubmit}
      >
        <Wrapper>
          <h2>Create your Form.</h2>
          <FormItem
            validateStatus={touched.email && errors.email ? "error" : undefined}
            help={touched.email && errors.email ? errors.email : null}
          >
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              name="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </FormItem>
          <FormItem
            validateStatus={
              touched.password && errors.password ? "error" : undefined
            }
            help={touched.password && errors.password ? errors.password : null}
          >
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              name="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </FormItem>
          <FormItem>
            <Checkbox
              name="rememberMe"
              onChange={handleChange}
              checked={values.rememberMe}
            >
              Remember me
            </Checkbox>
          </FormItem>
          <FormItem>
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            Or <a href="">register now!</a>
          </FormItem>
        </Wrapper>
      </form>
    )
  }
}

export const QuestionForm = withFormik<Props, FormValues>({
  validationSchema: loginValidationSchema,
  // validateOnChange: false,
  mapPropsToValues: () => ({
    email: "",
    password: "",
    rememberMe: false
  }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values)

    if (errors) {
      setErrors(errors)
    }
  }
})(FormComponent)
