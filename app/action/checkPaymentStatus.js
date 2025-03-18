'use server'


export default async function checkPaymentStatus(userId){
    console.log("userId ", userId)
    const res = await fetch('http:localhost:5000/api/v1/payment/status', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId }),
      });
  
      const result = await res.json();
      
      console.log("Result: ", result);

      return result;
}