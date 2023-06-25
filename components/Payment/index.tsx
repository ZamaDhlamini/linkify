import { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import Image from 'next/image';
import styles from './Payment.module.css';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PaymentPage = ({ isOpen, onClose }: PaymentModalProps): JSX.Element | null => {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen, onClose]);

  const handlePaymentSubmit = async () => {
    const stripe = await stripePromise;
    const response = await fetch('/api/payment/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ price: 200 }), // Customize the price as per your requirements
    });

    const session = await response.json();
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.error(result.error.message);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <form>
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
            <button className={styles.button} type="button" onClick={handlePaymentSubmit}>
              Proceed to Payment
            </button>
          </section>
          <div className={styles.image}>
            <img src="/banner.png" alt="Banner box" />
          </div>
          <div className={styles.imageLogo}>
            <img src="/coatofarms.png" alt="Banner box" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;
