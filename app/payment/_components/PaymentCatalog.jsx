'use client';

import { useEffect, useState } from "react";
import CheckoutButton from "./CheckoutButton";
import { useUser } from '@clerk/nextjs';
import checkPaymentStatus from '../../action/checkPaymentStatus';

const plans = {
  monthly: [
    { name: "Free", price: 0 },
    { name: "Basic", price: 10 },
    { name: "Premium", price: 25 },
  ],
  yearly: [
    { name: "Free", price: 0 },
    { name: "Basic", price: 100 },
    { name: "Premium", price: 250 },
  ],
};

const Card = ({ billingCycle, name, price, showButton }) => {
  const planDetails = {
    Free: [
      "Limited voices & styles",
      "Up to 5,000 characters per month",
      "Basic audio quality",
      "No commercial use",
    ],
    Basic: [
      "More voice options",
      "Up to 50,000 characters per month",
      "Standard audio quality",
      "Limited commercial use",
    ],
    Premium: [
      "Full voice library access",
      "Up to 200,000 characters per month",
      "High-quality audio output",
      "Full commercial rights",
      "Priority support",
    ],
  };

  return (
    <div className="border rounded-2xl p-6 text-center shadow-md bg-white">
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-2xl font-bold mt-2">${price} <span className="text-sm">/{billingCycle}</span></p>
      <ul className="text-left mt-4 space-y-2 mb-4">
        {planDetails[name].map((feature, index) => (
          <li key={index} className="text-sm">✅ {feature}</li>
        ))}
      </ul>
      {showButton && <CheckoutButton name={name} billingCycle={billingCycle} />}
    </div>
  );
};

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [paymentStatus, setPaymentStatus] = useState(false);
  const [isPaymentLoading, setIsPaymentLoading] = useState(true);
  const { isSignedIn, user, isLoaded } = useUser();

  useEffect(() => {
    async function getPaymentData() {
      if (isLoaded && isSignedIn) {
        try {
          const paymentStatus = await checkPaymentStatus(user.id);
          setPaymentStatus(paymentStatus.status);
        } catch (error) {
          console.error("Error checking payment status:", error);
        } finally {
          setIsPaymentLoading(false);
        }
      } else {
        setIsPaymentLoading(false); // Stop loading if not signed in
      }
    }
    getPaymentData();
  }, [isLoaded, isSignedIn, user]);

  // Show loading until Clerk or Payment Status is fully loaded
  if (!isLoaded || isPaymentLoading) {
    return <h1 className="text-white">Loading...</h1>;
  }

  // Show only Payment Done if user has already paid
  if (isSignedIn && paymentStatus) {
    return <h1 className="text-white">Payment Done</h1>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold">Choose Your Plan</h2>
      <div className="flex justify-center my-4">
        <button
          className={`px-4 py-2 rounded-l-lg ${billingCycle === "monthly" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
          onClick={() => setBillingCycle("monthly")}
        >
          Monthly
        </button>
        <button
          className={`px-4 py-2 rounded-r-lg ${billingCycle === "yearly" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
          onClick={() => setBillingCycle("yearly")}
        >
          Yearly
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans[billingCycle].map((plan) => (
          <Card
            key={plan.name}
            billingCycle={billingCycle}
            name={plan.name}
            price={plan.price}
            showButton={isSignedIn}
          />
        ))}
      </div>
    </div>
  );
}
