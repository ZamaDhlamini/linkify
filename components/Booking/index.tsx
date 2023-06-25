import { Form, Input, Select, Button, DatePicker, message, Modal } from 'antd';
import { UserOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import type { DatePickerProps } from 'antd';
import styles from './Booking.module.css';
import moment from 'moment';
import { useState } from "react";
import Link from 'next/link';

const { Option } = Select;

const branches = ['Chartwell Sassa Branch', 'Soweto Sassa Branch', 'Fourways Sassa Branch']; // should be replaced with backend API

const reasons = ['Collection', 'Enquire', 'Report Fraud']; // should be replaced with backend API

const onChange = (date: moment.Moment | null, dateString: string) => {
  console.log(date, dateString);
};

const Booking: React.FC = () => {
  const [bookingStatus, setBookingStatus] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false); // State to control the visibility of the modal

  const onFinish = (values: any) => {
    console.log('Form values:', values);
    // Here you can handle the form submission and any further actions
    setBookingStatus('success');
    message.success('Booked successfully');
    setIsModalVisible(true); // Show the modal when the form is successfully submitted
  };

  const handleModalClose = () => {
    setIsModalVisible(false); // Hide the modal
  };

  return (
    <>
      <h1 className={styles.heading}>Book a Branch Visit!</h1>
      {bookingStatus === 'success' && (
        <div className={styles.bookingMessage}>Booked successfully</div>
      )}
      {/* <div className={styles.image}>
      <img src='/sassa_branch.jpg'></img>
      </div> */}
      <Form onFinish={onFinish} className={styles.container}>
        <Form.Item
          name="userId"
          rules={[{ required: true, message: 'Please input your ID number!' }]}
        >
          <Input prefix={<UserOutlined />} placeholder="ID Number" />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input prefix={<MailOutlined />} placeholder="Email Address" />
        </Form.Item>

        <Form.Item
          name="number"
          rules={[{ required: true, message: 'Please input your phone number!' }]}
        >
          <Input prefix={<PhoneOutlined />} placeholder="Phone Number" />
        </Form.Item>

        <Form.Item
          name="branch"
          rules={[{ required: true, message: 'Please select a branch!' }]}
        >
          <Select placeholder="Select Branch" className={styles.dropdown1}>
            {branches.map((branch, index) => (
              <Option key={index} value={branch}>
                {branch}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name="reason"
          rules={[{ required: true, message: 'Please select a reason!' }]}
        >
          <Select placeholder="Select Reason" className={styles.dropdown2}>
            {reasons.map((reason, index) => (
              <Option key={index} value={reason}>
                {reason}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="date"
          rules={[{ required: true, message: 'Please select a date!' }]}
        >
          <DatePicker onChange={onChange} placeholder="Select Date" className={styles.datePicker} />
        </Form.Item>
        <Form.Item>
          <Button className={styles.submitButton} htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Modal
        visible={isModalVisible}
        onCancel={handleModalClose}
        onOk={handleModalClose}
        title="Booking Confirmation"
        okText="OK"
        closable={false}
        >
        <p className={styles.modalContext}>Booking confirmed</p>
          <Link href='/DashBoard'>
        <Button className={styles.modalButton}>Go to dashBoard</Button>
          </Link>
      </Modal>
    </>
  );
};

export default Booking;
