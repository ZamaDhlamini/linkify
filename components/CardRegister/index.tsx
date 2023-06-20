import { useState } from 'react';
import { Form, Input, Row, Col, Image, Button } from 'antd';
import styles from './CardRegister.module.css';

const LinkCard = () => {
  const [cardData, setCardData] = useState({ name: '', cardNumber: '', month: '', year: '' });

  const handleInputChange = (fieldName, value) => {
    setCardData((prevData) => ({ ...prevData, [fieldName]: value }));
  };

  return (
    <div>
        <div className={styles.paragraph1}>
        <p className={styles.scrollingText}>Your credit card number is a 15- or 16-digit number that is usually embossed or printed on the front of your credit card toward the bottom, though it’s becoming increasingly common for credit card issuers to print the card number on the back.</p>
        </div>
      <div className={styles.Heading}>
        <h1>Register Sassa Card</h1>
      </div>
      <div className={styles.Form}>
      <Form layout="vertical">
        <Form.Item label="Name on Card">
          <Input value={cardData.name} onChange={(e) => handleInputChange('name', e.target.value)} />
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
        <Button type='primary'>Save Card</Button>
      </Form>
      </div>
      <div className={styles.cardImage}>
        <div className={styles.cardNumber}>{cardData.cardNumber}</div>
        <div className={styles.cardName}>{cardData.name}</div>
        <div className={styles.cardExpiry}>
          {cardData.month}/{cardData.year}
        </div>
      </div>
    </div>
  );
};

export default LinkCard;
