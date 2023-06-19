import { Form, Input, Button } from 'antd';
import { UserOutlined, MailOutlined, LockOutlined, SolutionOutlined } from '@ant-design/icons';
import styles from './SignUp.module.css';
import Link from 'next/link';

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
            <div className={styles.inputLabel}>Name:</div>
            <Input prefix={<UserOutlined />} placeholder="Enter your name" />
          </Form.Item>
          <Form.Item
            name="surname"
            rules={[{ required: true, message: 'Please enter your surname!' }]}
            className={styles.formItem}
          >
            <div className={styles.inputLabel}>Surname:</div>
            <Input prefix={<UserOutlined />} placeholder="Enter your surname" />
          </Form.Item>
          <Form.Item
            name="identityNumber"
            rules={[{ required: true, message: 'Please enter your identity number!' }]}
            className={styles.formItem}
          >
            <div className={styles.inputLabel}>Identity Number:</div>
            <Input prefix={<SolutionOutlined />} placeholder="Enter your identity number" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: 'Please enter your email!' },
              { type: 'email', message: 'Please enter a valid email address!' },
            ]}
            className={styles.formItem}
          >
            <div className={styles.inputLabel}>Email:</div>
            <Input prefix={<MailOutlined />} placeholder="Enter your email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please enter your password!' }]}
            className={styles.formItem}
          >
            <div className={styles.inputLabel}>Password:</div>
            <Input.Password prefix={<LockOutlined />} placeholder="Enter your password" />
          </Form.Item>
          <Form.Item>
            <div className={styles.button}>
              <Link href='/ApplyForm'>
            <Button type="primary" htmlType="submit">
              Sign Up
            </Button>
              </Link>
            </div>
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
          <p>
            The Republic of South Africa is a parliamentary republic with a three-tier system of government and an
            independent judiciary, operating in a parliamentary system.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
