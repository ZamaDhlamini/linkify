import { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      return;
    }

    const result = await stripe.createToken(cardElement);

    if (result.error) {
      setPaymentError(result.error.message || 'An error occurred while processing your payment.');
    } else {
      // Process the payment with the token or perform additional actions
      console.log('Payment successful!', result.token);
      setPaymentError('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Card details:</label>
        <CardElement options={{ style: { base: { fontSize: '16px' } } }} />
      </div>
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
      {paymentError && <div>{paymentError}</div>}
    </form>
  );
};

export default PaymentForm;
