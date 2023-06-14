import { Form, Input, Button, Row, Col } from 'antd';
import { useState } from 'react';
import styles from './Application.module.css';
import Navbar from '../NavBar';

const GrantForm = () => {
    const [isSaveClicked, setIsSaveClicked] = useState(false);

  const onFinish = (values) => {
    console.log('Form values:', values);
    setIsSaveClicked(true);
  };

  return (
    <><Navbar /><Form onFinish={onFinish}>
        <div className={styles.heading1}>
        <h1>Application for Child Support Grant</h1>
        </div>
          <Row gutter={16}>
              <Col span={12}>
                <div className={styles.container1}>
                  <Form.Item label="ID Number" name="idNumber" rules={[{ required: true, message: 'Please enter your ID number' }]}>
                      <Input />
                  </Form.Item>
                  <Form.Item label="Surname" name="surname" rules={[{ required: true, message: 'Please enter your surname' }]}>
                      <Input />
                  </Form.Item>
                  <Form.Item label="Full Name" name="fullName" rules={[{ required: true, message: 'Please enter your full name' }]}>
                      <Input />
                  </Form.Item>
                  <Form.Item label="Email Address" name="email" rules={[{ required: true, type: 'email', message: 'Please enter a valid email address' }]}>
                      <Input />
                  </Form.Item>
                  <Form.Item label="Cellphone Number" name="cellphone" rules={[{ required: true, message: 'Please enter your cellphone number' }]}>
                      <Input />
                  </Form.Item>
                </div>
              </Col>
              <Col span={12}>
                <div className={styles.container2}>
                  <Form.Item label="Street Name" name="street" rules={[{ required: true, message: 'Please enter the street name' }]}>
                      <Input />
                  </Form.Item>
                  <Form.Item label="City" name="city" rules={[{ required: true, message: 'Please enter the city' }]}>
                      <Input />
                  </Form.Item>
                  <Form.Item label="Province" name="province" rules={[{ required: true, message: 'Please enter the province' }]}>
                      <Input />
                  </Form.Item>
                  <Form.Item label="Postal Code" name="postalCode" rules={[{ required: true, message: 'Please enter the postal code' }]}>
                      <Input />
                  </Form.Item>
                </div>
              </Col>
          </Row>
          <Form.Item>
              <div className={styles.button1}>
                  <Button type="primary" htmlType="submit">
                      Save
                  </Button>
              </div>
              {isSaveClicked && ( // Display the next page button if save button is clicked
                  <Button type="primary" htmlType="button" style={{ marginLeft: 8 }}>
                      Next Page
                  </Button>
              )}
          </Form.Item>
          <div className={styles.imageLogo}>
        <img src="/coatofarms.png" alt="Banner box" />
      </div>
      </Form></>
      
  );
};

export default GrantForm;
