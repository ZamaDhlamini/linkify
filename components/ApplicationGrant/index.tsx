import { Form, Input, Button, Row, Col } from 'antd';
import { useState } from 'react';
import styles from './ApplicationGrant.module.css';
import Navbar from '../NavBar';

const GrantForm = () => {
    const [isSaveClicked, setIsSaveClicked] = useState(false);
    const [isSaved, setIsSaved] = useState(false);

  const onFinish = (values) => {
    console.log('Form values:', values);
    setIsSaveClicked(true);
    setIsSaved(true);
  };

  return (
    <><Navbar /><Form onFinish={onFinish}>
        <div className={styles.heading1}>
        <h1>Application for Child Support Grant</h1>
        </div>
          <Row gutter={[16, 16]}>
              <Col span={12}>
                <div className={styles.container1}>
                <Form.Item
                label="ID Number"
                name="idNumber"
                rules={[{ required: true, message: 'Please enter your ID number' }]}
              >
                <Input className={styles.input} />
              </Form.Item>
              <Form.Item
                label="Surname"
                name="surname"
                rules={[{ required: true, message: 'Please enter your surname' }]}
              >
                <Input className={styles.input} />
              </Form.Item>
              <Form.Item
                label="Full Name"
                name="fullName"
                rules={[{ required: true, message: 'Please enter your full name' }]}
              >
                <Input className={styles.input} />
              </Form.Item>
              <Form.Item
                label="Email Address"
                name="email"
                rules={[{ required: true, type: 'email', message: 'Please enter a valid email address' }]}
              >
                <Input className={styles.input} />
              </Form.Item>
              <Form.Item
                label="Cellphone Number"
                name="cellphone"
                rules={[{ required: true, message: 'Please enter your cellphone number' }]}
              >
                <Input className={styles.input} />
              </Form.Item>
                </div>
              </Col>
              <Col span={12}>
                <div className={styles.container2}>
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
                rules={[{ required: true, message: 'Please enter the city' }]}
              >
                <Input className={styles.input} />
              </Form.Item>
              <Form.Item
                label="Province"
                name="province"
                rules={[{ required: true, message: 'Please enter the province' }]}
              >
                <Input className={styles.input} />
              </Form.Item>
              <Form.Item
                label="Postal Code"
                name="postalCode"
                rules={[{ required: true, message: 'Please enter the postal code' }]}
              >
                <Input className={styles.input} />
              </Form.Item>
                </div>
              </Col>
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
          <div className={styles.imageLogo}>
        <img src="/coatofarms.png" alt="Banner box" />
        <h5>Stuck?Click here for help</h5>
      </div>
      </Form></>
      
  );
};

export default GrantForm;
