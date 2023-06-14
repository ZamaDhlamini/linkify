import { Form, Input, Button } from 'antd';
import 'antd/dist/antd.css';

const MyForm = () => {
  const onFinish = (values) => {
    console.log('Form values:', values);
  };

  return (
    <Form onFinish={onFinish}>
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
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Save
        </Button>
        <Button type="primary" htmlType="button" style={{ marginLeft: 8 }}>
          Next Page
        </Button>
      </Form.Item>
    </Form>
  );
};

export default MyForm;
