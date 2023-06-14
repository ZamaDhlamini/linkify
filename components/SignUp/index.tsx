import { Form, Input, Button } from 'antd';
import { UserOutlined, MailOutlined, LockOutlined, SolutionOutlined } from '@ant-design/icons';
import styles from './SignUp.module.css';

const SignUpForm = () => {
  const onFinish = (values: any) => {
    console.log('Received values:', values);
  };

  return (
    <div>
      <div className={styles.heading1}>
        <h1>Hello, new member!</h1>
      </div>
      {/* <div className={styles.heading2}>
        <h2>Sign Up</h2>
      </div> */}
      <div className={styles.container}>
      <Form name="signup" onFinish={onFinish}>
        <Form.Item
          name="name"
          rules={[{ required: true, message: 'Please enter your name!' }]}
          className={styles.formItem}
        >
          <Input prefix={<UserOutlined />} placeholder="Name" />
        </Form.Item>
        <Form.Item
          name="surname"
          rules={[{ required: true, message: 'Please enter your surname!' }]}
          className={styles.formItem}
        >
          <Input prefix={<UserOutlined />} placeholder="Surname" />
        </Form.Item>
        <Form.Item
          name="identityNumber"
          rules={[{ required: true, message: 'Please enter your identity number!' }]}
          className={styles.formItem}
        >
          <Input prefix={<SolutionOutlined />} placeholder="Identity Number" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            { required: true, message: 'Please enter your email!' },
            { type: 'email', message: 'Please enter a valid email address!' },
          ]}
          className={styles.formItem}
        >
          <Input prefix={<MailOutlined />} placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please enter your password!' }]}
          className={styles.formItem}
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
      <div className={styles.image}>
            <img src="/banner.png" alt="Banner box" />
            </div>
            <div className={styles.imageLogo}>
            <img src="/coatofarms.png" alt="Banner box" />
            </div>
            <div className={styles.paragraph1}>
              <div className={styles.scrollText}>
            <p>The Republic of South Africa is a parliamentary republic with a three-tier system of government and an independent judiciary, operating in a parliamentary system.</p>
              </div>
            </div>
    </div>
  );
};

export default SignUpForm;
