import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from '../Payment';
import stripePromise from '../../utils/stripeClient';

const BuyElectricityPage = () => {
  return (
    <div>
      <h1>Buy Electricity</h1>
      <Elements stripe={stripePromise}>
        <PaymentForm />
      </Elements>
    </div>
  );
};

export default BuyElectricityPage;
