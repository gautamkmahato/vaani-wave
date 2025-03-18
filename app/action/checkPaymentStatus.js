'use server'


export default async function checkPaymentStatus(userId){
    console.log("userId ", userId)
    const res = await fetch('https://tts-backend.vercel.app/api/v1/payment/status', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId }),
      });
  
      const result = await res.json();
      
      console.log("Result: ", result);

      return result;
}