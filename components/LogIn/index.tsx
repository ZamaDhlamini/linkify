import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styles from './LogIn.module.css';
import Link from 'next/link';
import { useUsers } from '../../pages/providers/person';
import { ILogin } from '../../pages/providers/person/context';

const LoginForm = () => {
  const { login, Login } = useUsers();

  const onFinish = async (values: ILogin) => {
    console.log("Received values:", values);
    if (login) {
      login(values);
    } else {
      console.log("Failed to logIn");
      alert("Failed to Login");
    }
  };

  return (
    <div>
      <div className={styles.image}>
            <img src="/linkifylogo.png" alt="Linkify Logo" />
            </div>
        <div className={styles.heading}>
      <h1>Login</h1>
        </div>
      <Form name="login-form" onFinish={onFinish} className={styles.container}>
        <Form.Item
          name="EmailAddress"
          rules={[
            {
              required: true,
              type: 'email',
              message: 'Please enter a valid email!',
            },
          ]}
        >
          <Input prefix={<UserOutlined />} placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="Password"
          rules={[{ required: true, message: 'Please enter your password!' }]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button className={styles.button} htmlType="submit" block>
            Log in
          </Button>
        </Form.Item>
      </Form>
      <div className={styles.heading5}>
      <h5>Forgot password?</h5>
      <Link href="/SignUp">
      <h5>Sign Up</h5>
      </Link>
      </div>
    </div>
  );
};

export default LoginForm;
