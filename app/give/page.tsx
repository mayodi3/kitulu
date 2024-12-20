"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

export default function Give() {
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("credit_card");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically integrate with a payment processor
    console.log("Donation submitted:", { amount, paymentMethod });
    // Reset form after submission
    setAmount("");
    setPaymentMethod("credit_card");
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-4xl font-bold mb-8 text-center">
        Give to Our Church
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Make a Donation</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="amount" className="block mb-1">
                Amount ($)
              </label>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
                min="1"
                step="0.01"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div>
              <label htmlFor="paymentMethod" className="block mb-1">
                Payment Method
              </label>
              <select
                id="paymentMethod"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-full px-3 py-2 border rounded-md"
              >
                <option value="credit_card">Credit Card</option>
                <option value="paypal">PayPal</option>
                <option value="bank_transfer">Bank Transfer</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Donate Now
            </button>
          </form>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Why Give?</h2>
          <Image
            src="/church.jpg?height=200&width=400&text=Giving+Impact"
            alt="Giving impact"
            width={400}
            height={200}
            className="w-full rounded-lg shadow-md mb-4"
          />
          <p className="text-lg mb-4">
            Your generous donations help us continue our mission of spreading
            God&apos;s love and making a positive impact in our community. Here are
            some of the ways your contributions make a difference:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Supporting local outreach programs</li>
            <li>Maintaining and improving our church facilities</li>
            <li>Funding mission trips and global initiatives</li>
            <li>Providing resources for youth and children&apos;s ministries</li>
            <li>Assisting families in need within our congregation</li>
          </ul>
        </section>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Other Ways to Give</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">Text-to-Give</h3>
            <p>
              Send a text message to (123) 456-7890 with the amount you wish to
              donate.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">Mail-in Donations</h3>
            <p>Send checks to: 123 Faith Street, Cityville, State 12345</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">Planned Giving</h3>
            <p>
              Contact our finance office to discuss legacy gifts and estate
              planning.
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
