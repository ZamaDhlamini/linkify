import { Form, Input, Button } from 'antd';
import { UserOutlined, MailOutlined, LockOutlined, SolutionOutlined } from '@ant-design/icons';
import styles from './SignUp.module.css';

const SignUpForm = () => {
  const onFinish = (values: any) => {
    console.log('Received values:', values);
  };

  return (
    <div>
        <h1>Hello, new member!</h1>
      <h2>Sign Up</h2>
      <Form
        name="signup"
        onFinish={onFinish}
      >
        <Form.Item
          name="name"
          rules={[{ required: true, message: 'Please enter your name!' }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Name" />
        </Form.Item>
        <Form.Item
          name="surname"
          rules={[{ required: true, message: 'Please enter your surname!' }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Surname" />
        </Form.Item>
        <Form.Item
          name="identityNumber"
          rules={[{ required: true, message: 'Please enter your identity number!' }]}
        >
          <Input prefix={<SolutionOutlined />} placeholder="Identity Number" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            { required: true, message: 'Please enter your email!' },
            { type: 'email', message: 'Please enter a valid email address!' },
          ]}
        >
          <Input prefix={<MailOutlined />} placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please enter your password!' }]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUpForm;
