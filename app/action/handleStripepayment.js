'use server'


export default async function handleStripePayment(userId, email, priceId){
  console.log("userId ", userId)
    const res = await fetch('http:localhost:5000/api/v1/payment/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, email, priceId }),
      });
  
      const result = await res.json();
      
      console.log("Result: ", result);

      return result;
}