import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styles from './LogIn.module.css';
import Link from 'next/link';
import { useUsers } from '../../pages/providers/person';
import { ILogin } from '../../pages/providers/person/context';
import router, { useRouter } from 'next/router';

const LoginForm = () => {
  const { login, Login } = useUsers();
  const router = useRouter();

  const onFinish = async (values: ILogin) => {
    console.log("Received values:", values);
    if (login) {
      login(values);
      router.push('/DashBoard');
    } else {
      console.log("Failed to logIn");
      alert("Failed to Login");
    }
  };

  return (
      <>
      <div className={styles.image}>
      <img src="/linkifylogo.png" alt="Linkify Logo" />
    </div><div className={styles.heading}>
        <h1>Login</h1>
      </div><Form
        name="loginForm"
        onFinish={onFinish}
        className={styles.form}
      >
        <Form.Item
          label='Email'
          name="userNameOrEmailAddress"
          labelCol={{ span: 4 }}
          rules={[{ required: true, message: "Please enter your email address or username" }]}
        >
          <Input placeholder="Email address or username" />
        </Form.Item>
        <Form.Item
          label='Password'
          name="Password"
          rules={[{ required: true, message: "Please enter your password" }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button className={styles.button} htmlType="submit" block>
            Log in
          </Button>
        </Form.Item>
      </Form>
      <Link href="/SignUp">
        <h5 className={styles.heading5}>Sign Up</h5>
      </Link>
      </>
  );
};

export default LoginForm;
