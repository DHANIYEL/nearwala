import React from 'react'

const FAQPage = () => {
  const faqs = [
    {
      question: "What is the Nearwala app?",
      answer: "Nearwala is a hyper-local shopping aggregator platform that enables users to discover nearby local shops offering the products and services they seek, along with assured cash discounts on every purchase."
    },
    {
      question: "How do I register on Nearwala?",
      answer: (
        <>
          To register:
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Download the Nearwala app from the Google Play Store or Apple App Store</li>
            <li>Sign up using your mobile number</li>
            <li>Start exploring offers from nearby shops</li>
          </ul>
        </>
      )
    },
    {
      question: "Is the Nearwala app available for iOS devices?",
      answer: "Yes, the Nearwala app is available for both Android and iOS devices. You can download it from the respective app stores."
    },
    {
      question: "How can I receive notifications about Nearwala offers?",
      answer: (
        <>
          To receive notifications:
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Follow your preferred shops within the Nearwala app</li>
            <li>Enable notifications in your device settings for the Nearwala app</li>
          </ul>
        </>
      )
    },
    {
      question: "What are N-Coins, and how do they work?",
      answer: "N-Coins are digital discount points within the Nearwala app that allow you to avail discounts at partner shops. For example, adding ₹100 to your wallet converts into 400 N-Coins, enabling you to secure discounts worth ₹400 on future purchases."
    },
    {
      question: "How do I use N-Coins to get discounts?",
      answer: (
        <>
          To use N-Coins:
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Ensure you have sufficient N-Coins in your Nearwala wallet</li>
            <li>Shop at a Nearwala partner store</li>
            <li>Scan the Nearwala QR code at the shop using the app</li>
            <li>Enter the bill amount; the app will display the discount and the final amount to be paid</li>
            <li>Pay the final amount to the shopkeeper</li>
          </ul>
        </>
      )
    },
    {
      question: "What should I do if a shop refuses to accept Nearwala Pay?",
      answer: (
        <>
          If a shop declines Nearwala Pay:
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Report the incident to Nearwala customer support within 24 hours of the transaction attempt</li>
            <li>Provide relevant evidence, such as transaction details and communication with the shop</li>
            <li>Upon verification, Nearwala will initiate a refund if applicable</li>
          </ul>
        </>
      )
    },
    {
      question: "How does Nearwala handle refunds for transaction failures?",
      answer: (
        <>
          In case of a failed UPI transaction:
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>The debited amount is typically auto-reversed to your bank account within T+1 day</li>
            <li>If the refund is not processed within 7 banking days, contact Nearwala support with transaction details</li>
            <li>After verification, Nearwala will ensure the refund is processed within 14 banking days from the transaction date</li>
          </ul>
        </>
      )
    },
    {
      question: "How can I contact Nearwala customer support?",
      answer: "You can reach Nearwala customer support through the app's support section or by visiting the Nearwala website."
    },
    {
      question: "Are there any charges for using Nearwala services?",
      answer: "Nearwala does not charge users for browsing or availing discounts. However, purchasing N-Coins to access discounts involves a monetary transaction."
    },
    {
      question: "How do I update my account information?",
      answer: (
        <>
          To update your account information:
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Open the Nearwala app</li>
            <li>Navigate to the 'Profile' section</li>
            <li>Edit your details as required and save the changes</li>
          </ul>
        </>
      )
    },
    {
      question: "Is my personal information secure with Nearwala?",
      answer: "Nearwala prioritizes user privacy and employs robust security measures to protect your personal information. For more details, refer to our Privacy Policy."
    },
    {
      question: "Can I suggest a shop to be added to Nearwala?",
      answer: "Yes, you can suggest local shops or merchants you'd like to see on our platform. Nearwala will work towards onboarding them to enhance your shopping experience."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
        <p className="text-gray-600">Find answers to common questions about Nearwala</p>
      </div>

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{faq.question}</h3>
            <div className="text-gray-700">{faq.answer}</div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-700">
          For further assistance, please contact our customer support team through the Nearwala app or our official website.
        </p>
      </div>
    </div>
  )
}

export default FAQPage