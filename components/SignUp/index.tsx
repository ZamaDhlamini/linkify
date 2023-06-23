import { Form, Input, Button } from 'antd';
import { UserOutlined, MailOutlined, LockOutlined, SolutionOutlined } from '@ant-design/icons';
import styles from './SignUp.module.css';
import Link from 'next/link';
import { useUsers } from '../../pages/providers/person';
import { IUser } from '../../pages/providers/person/context';
import router from 'next/router';

const SignUpForm = () => {
  const { createUser } = useUsers();

  const onFinish = async (values: IUser) => {
    console.log("Received values:", values);
    if (createUser) {
      createUser(values);
      router.push('/DashBoard');
    } else {
      console.log("Failed to create person");
      alert("Failed to create person");
    }
  };

  return (
    <><Form onFinish={onFinish} className={styles.loginBox}>
      <div className={styles.Inputs}>

        <Form.Item label="EmailAddress" name="EmailAddress" rules={[{ required: true, message: "Please enter your email" }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Password" name="Password" rules={[{ required: true, message: "Please enter your password" }]}>
          <Input.Password />
        </Form.Item>
        <Form.Item label="UserName" name="UserName" rules={[{ required: true, message: "Please enter your username" }]}>
          <Input />
        </Form.Item>
        <Form.Item label="SurName" name="SurName" rules={[{ required: true, message: "Please enter your surname" }]}>
          <Input />
        </Form.Item>
        <Form.Item label="IdNumber" name="IdNumber" rules={[{ required: true, message: "Please enter your surname" }]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="Phone Number"
          name="PhoneNumber"
          rules={[{ required: true, message: "Please enter your phone number" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Name" name="Name" rules={[{ required: true, message: "Please enter your name" }]}>
          <Input />
        </Form.Item>
      </div>
      <Form.Item>
        <div className={styles.button}>
          <Button type="primary" htmlType="submit">
            Sign Up
          </Button>
        </div>
      </Form.Item>
    </Form><><div className={styles.image}>
      <img src="/banner.png" alt="Banner box" />
    </div><div className={styles.imageLogo}>
          <img src="/coatofarms.png" alt="Banner box" />
        </div><div className={styles.paragraph1}>
          <div className={styles.scrollText}>
            <p>
              The Republic of South Africa is a parliamentary republic with a three-tier system of government and an
              independent judiciary, operating in a parliamentary system.
            </p>
          </div>
        </div></></>
  );
};

export default SignUpForm;
