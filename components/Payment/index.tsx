import { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from './Payment.module.css'
import { Button } from 'antd';
import { Input } from 'antd';

loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

const PaymentPage = (): JSX.Element => {
  const router = useRouter();
  const { success, canceled } = router.query;

  useEffect(() => {
    if (success !== undefined || canceled !== undefined) {
      if (success) {
        console.log('Order placed! You will receive an email confirmation.');
      }

      if (canceled) {
        console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
      }
    }
  }, [success, canceled]);

  return (
    <form action="/api/users" method="POST">
      <section className={styles.section}>
        <div>
          <div className={styles.image}>
            {/* <Image src="{{IMAGE_URL}}" alt="Electricity" width={150} height={150} /> */}
          </div>
          <div className={styles.description}>
            <h3 className={styles.heading}>Home Electricity</h3>
            <h5 className={styles.price}>R200</h5>
          </div>
        </div>
        <Input placeholder="Meter Number"
               className={styles.input1} />
        <Input placeholder="Amount" 
              className={styles.input2}/>
        <button className={styles.button} type="submit" role="link">
          Checkout
        </button>
      </section>
      <div className={styles.image}>
        <img src="/banner.png" alt="Banner box" />
      </div>
      <div className={styles.imageLogo}>
        <img src="/coatofarms.png" alt="Banner box" />
      </div>
    </form>
  );
};

export default PaymentPage;