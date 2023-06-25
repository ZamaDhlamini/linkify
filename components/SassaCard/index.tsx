import { useState } from 'react';
import styles from './SassaCard.module.css';
import { Button } from 'antd';
import Link from 'next/link';
import PaymentPage from '../Payment';

type CreditCard = {
  cardName: string;
  cardNumber: string;
  cvv: string;
};

const OnlineBankingPage = () => {
  const [creditCard] = useState<CreditCard>({
    cardName: 'John Doe',
    cardNumber: '1234 5678 9012 3456',
    cvv: '123',
  });

  const [isPaymentModalOpen, setPaymentModalOpen] = useState(false);

  const handlePaymentButtonClick = () => {
    setPaymentModalOpen(true);
  };

  const handlePaymentModalClose = () => {
    setPaymentModalOpen(false);
  };

  const handleBuyElectricity = () => {
    // Logic to handle the purchase of electricity
    // You can update the balance or perform other actions here
    console.log('Electricity purchased!');
  };

  const [balance, setBalance] = useState<number>(350);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Online Banking</h1>
      <div className={styles.creditCard}>
        <div className={styles.cardFront}>
          <div className={styles.cardLogo}></div>
          <div className={styles.cardChip}></div>
          <div className={styles.cardNumber}>{creditCard.cardNumber}</div>
          <div className={styles.cardName}>{creditCard.cardName}</div>
          <div className={styles.cardValid}></div>
        </div>
        <div className={styles.cardBack}>
          <div className={styles.cardCvv}>{creditCard.cvv}</div>
        </div>
      </div>
      <h2 className={styles.balance}>Balance: R{balance}</h2>
      <div className={styles.buySection}>
        <p className={styles.buy}>Buy</p>
        <p className={styles.electricity}>Electricity</p>
        <Link href='/ElectricityPayment'>
        <Button>Buy Electricity</Button>
        </Link>
      </div>
      <div className={styles.image}>
      <img src="/banner.png" alt="Banner box" />
    </div><div className={styles.imageLogo}>
          <img src="/coatofarms.png" alt="Banner box" />
        </div><div className={styles.paragraph1}>
          <div className={styles.scrollText}>
          </div>
          </div>
    </div>
  );
};

export default OnlineBankingPage;
