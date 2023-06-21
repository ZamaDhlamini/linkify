import { Form, Input, Select, Button, DatePicker } from 'antd';
import { UserOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import type { DatePickerProps } from 'antd';
import styles from './Booking.module.css';



const { Option } = Select;

const branches = ['Branch 1', 'Branch 2', 'Branch 3']; //should be replaced with backend api

const reasons = ['Reason 1', 'Reason 2', 'Reason 3']; //should be replaced with backed api

const onChange = (date: moment.Moment | null, dateString: string) => {
  console.log(date, dateString);
};
const onFinish = (values: any) => {
  console.log('Form values:', values);
  // Here you can handle the form submission and any further actions
};


const Booking: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Form values:', values);
    // Here you can handle the form submission and any further actions
  };

  return (
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
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Booking;
