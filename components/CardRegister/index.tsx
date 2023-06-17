import { useState } from 'react';
import { Form, Input, Row, Col, Image } from 'antd';

const LinkCardPage = () => {
  const [cardData, setCardData] = useState({ name: '', cardNumber: '', month: '', year: '' });

  const handleInputChange = (fieldName: string, value: string) => {
    setCardData((prevData) => ({ ...prevData, [fieldName]: value }));
  };

  return (
    <div>
      <h1>Link a Card</h1>
      <Form layout="vertical">
        <Form.Item label="Name on Card">
          <Input
            value={cardData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Card Number">
          <Input
            value={cardData.cardNumber}
            onChange={(e) => handleInputChange('cardNumber', e.target.value)}
          />
        </Form.Item>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Month">
              <Input
                value={cardData.month}
                onChange={(e) => handleInputChange('month', e.target.value)}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Year">
              <Input
                value={cardData.year}
                onChange={(e) => handleInputChange('year', e.target.value)}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <Image
        src={`https://dummyimage.com/200x100/000/fff&text=${cardData.name}+${cardData.cardNumber}+${cardData.month}/${cardData.year}`}
      />
    </div>
  );
};

export default LinkCardPage;
