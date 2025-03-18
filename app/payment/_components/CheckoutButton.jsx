'use client';

import { useState } from 'react';
import { useUser } from '@clerk/nextjs';
import handleStripePayment from '../../action/handleStripepayment';
import { useRouter } from 'next/navigation';
import Link from 'next/link';


const CheckoutButton = ({ name, billingCycle }) => {
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState('');

  const { isSignedIn, user, isLoaded } = useUser();

  const router = useRouter();

  if (!isLoaded) return <p>Loading...</p>;

  if(!isSignedIn){
    return(
      <>
        <h1>Sign in to make Payment</h1>
      </>
    )
  }

  // const priceIdBasicMonthly: string | undefined = process.env.NEXT_PUBLIC_STRIPE_BASIC_MONTHLY_PRICE_ID;
  // const priceIdBasicYearly: string | undefined = process.env.NEXT_PUBLIC_STRIPE_BASIC_YEARLY_PRICE_ID;
  // const priceIdPremiumMonthly: string | undefined = process.env.NEXT_PUBLIC_STRIPE_PREMIUM_MONTHLY_PRICE_ID;
  // const priceIdPremiumYearly: string | undefined = process.env.NEXT_PUBLIC_STRIPE_PREMIUM_YEARLY_PRICE_ID;
  const userId = user?.id;
  const email = user?.primaryEmailAddress?.emailAddress;

  const priceMap = {
    Basic: {
      monthly: process.env.NEXT_PUBLIC_STRIPE_BASIC_MONTHLY_PRICE_ID,
      yearly: process.env.NEXT_PUBLIC_STRIPE_BASIC_YEARLY_PRICE_ID,
    },
    Premium: {
      monthly: process.env.NEXT_PUBLIC_STRIPE_PREMIUM_MONTHLY_PRICE_ID,
      yearly: process.env.NEXT_PUBLIC_STRIPE_PREMIUM_YEARLY_PRICE_ID,
    },
  };
  
  const priceId = priceMap[name]?.[billingCycle] || process.env.NEXT_PUBLIC_STRIPE_BASIC_MONTHLY_PRICE_ID;
  

  const handleCheckout = async () => {
    if (!userId || !email || !priceId) {
      console.log(name);
      console.log(billingCycle);
      console.log(userId);
      console.log(email);
      console.log(priceId);
      console.error('Missing required parameters for checkout');
      return;
    }

    setLoading(true);

    try {
      const result = await handleStripePayment(userId, email, priceId);
      console.log(result);
      if(result.sessionUrl){
        //router.push(result.sessionUrl);
        setUrl(result.sessionUrl)
      }
    } catch (error) {
      console.error('Error processing payment:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={handleCheckout}
        disabled={loading}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {loading ? 'Processing...' : 'Subscribe'}
      </button>
      {url && <Link href={url}>Pay Now..</Link>}
    </>
  );
};

export default CheckoutButton;
