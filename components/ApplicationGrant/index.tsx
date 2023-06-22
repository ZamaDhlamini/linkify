import { Form, Input, Button, Row, Col } from 'antd';
import { useState } from 'react';
import styles from './ApplicationGrant.module.css';
import Navbar from '../NavBar';
import Link from 'next/link';

const GrantForm = () => {
  const [isSaveClicked, setIsSaveClicked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const onFinish = (values) => {
    console.log('Form values:', values);
    setIsSaveClicked(true);
    setIsSaved(true);
  };

  return (
    <>
      <Navbar />
      <Form onFinish={onFinish} >
        <div className={styles.heading1}>
          <h1>Application for Child Support Grant</h1>
        </div>

        <Row gutter={[16, 16]}>
            <div className={styles.coloumn1}>
          <Col span={8}>
            <Form.Item
              label="ID Number"
              name="idNumber"
              labelCol={{span:15}}
              rules={[{ required: true, message: 'Please enter your ID number' }]}
            >
              <Input className={styles.input} />
            </Form.Item>
            <Form.Item
              label="Surname"
              name="surname"
              labelCol={{span:15}}
              rules={[{ required: true, message: 'Please enter your surname' }]}
            >
              <Input className={styles.input} />
            </Form.Item>
            <Form.Item
              label="Full Name"
              name="fullName"
              labelCol={{span:15}}
              rules={[{ required: true, message: 'Please enter your full name' }]}
              >
              <Input className={styles.input} />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              labelCol={{span:15}}
              rules={[{ required: true, type: 'email', message: 'Please enter a valid email address' }]}
            >
              <Input className={styles.input} />
            </Form.Item>
            <Form.Item

            label="Cell Number"
            name="cellphone"
            labelCol={{span:15}}
            rules={[{ required: true, message: 'Please enter your cellphone number' }]}
>
              <Input className={styles.input} />
            </Form.Item>
          </Col>
                </div>
          <div className={styles.column2}>
          <Col span={8}>
            <Form.Item
              label="Street Name"
              name="street"
              rules={[{ required: true, message: 'Please enter the street name' }]}
            >
              <Input className={styles.input} />
            </Form.Item>
            <Form.Item
              label="City"
              name="city"
              labelCol={{span:16}}
              rules={[{ required: true, message: 'Please enter the city' }]}
            >
              <Input className={styles.input} />
            </Form.Item>
            <Form.Item
              label="Province"
              name="province"
              labelCol={{span:16}}
              rules={[{ required: true, message: 'Please enter the province' }]}
            >
              <Input className={styles.input} />
            </Form.Item>
            <Form.Item
              label="Postal Code"
              name="postalCode"
              labelCol={{span:16}}
              rules={[{ required: true, message: 'Please enter the postal code' }]}
              >
              <Input className={styles.input} />
            </Form.Item>
          </Col>
                </div>
        </Row>
        <Form.Item>
          <div>
            <Button className={styles.button1} htmlType="submit">
              Save
            </Button>
          </div>
          {isSaved && <p>Saved successfully</p>}
          <div className={styles.buttonContainer}>
            {isSaveClicked && ( // Display the next page button if save button is clicked
              <Button htmlType="button" style={{ marginLeft: 8 }} className={styles.button2}>
                Next Page
              </Button>
            )}
          </div>
        </Form.Item>
      </Form>
      {/* <div className={styles.imageLogo}>
        <img src="/coatofarms.png" alt="Banner box" />
        <Link href="/KnowledgeBase">
          <h5>Stuck? Click here for help</h5>
        </Link>
      </div> */}
    </>
  );
};

export default GrantForm;
