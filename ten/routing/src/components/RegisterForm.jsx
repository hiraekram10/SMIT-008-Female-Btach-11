import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';




const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const RegisterForm  = ({register}) => {

  return(
  <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={register}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Usernam"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Email"
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your email',
        },
       
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
       
      ]}
    >
      <Input.Password />
    </Form.Item>

    

    <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
       Register
      </Button>
    </Form.Item>
  </Form>
)};
export default RegisterForm;