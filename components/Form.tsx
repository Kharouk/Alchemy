import React from "react"
import { Form, Icon, Input, Button, Checkbox } from "antd"
import { withFormik, FormikErrors, FormikProps } from "formik"
const FormItem = Form.Item

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
    const { values, handleChange, handleBlur, handleSubmit } = this.props
    return (
      <form
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
        onSubmit={handleSubmit}
      >
        <div style={{ maxWidth: "700px" }}>
          <h2>Create your Form.</h2>
          <FormItem>
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              name="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete=""
            />
          </FormItem>
          <FormItem>
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
        </div>
      </form>
    )
  }
}

export const QuestionForm = withFormik<Props, FormValues>({
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
