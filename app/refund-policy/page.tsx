import React from 'react'

const RefundPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto padding-x padding-y">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nearwala Refund Policy</h1>
        <p className="text-gray-600">Last updated: February 22, 2024</p>
      </div>

      <div className="prose prose-lg max-w-none">
        {/* N-Coins Refund Policy Section */}
        <section className="mb-12 bg-blue-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">N-Coins Refund Policy</h2>
          <p className="text-gray-700 mb-4">
            At Nearwala, we strive to provide our users with the best possible experience. Please note
            that purchases of N-Coins are <strong>non-refundable</strong>. We encourage you to utilize your N-Coins
            at participating Nearwala shops in your area to enjoy exclusive discounts.
          </p>
          
          <p className="text-gray-700 mb-4">
            If there are currently no Nearwala-affiliated shops in your vicinity, we welcome your
            suggestions for local shops or merchants you'd like to see on our platform. Our team will
            make efforts to onboard these businesses to enhance your discount options.
          </p>

          <p className="text-gray-700 mb-4">
            Rest assured, your N-Coins remain secure in your account unless you choose to delete your
            Nearwala app account. They will be preserved for your future use.
          </p>

          <p className="text-gray-700">
            For more details, please visit our official refund policy page: {' '}
            <a href="https://nearwala.com/refund" className="text-blue-600 hover:underline">nearwala.com/refund</a>
          </p>
        </section>

        {/* Transactions and Shop Rejections Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Refund Policy for Transactions and Shop Rejections</h2>
          <p className="text-gray-700 mb-6">
            At Nearwala, we are committed to ensuring a seamless and trustworthy experience for our
            users. Our refund policies are designed to address issues related to transaction failures and
            shop rejections as follows:
          </p>

          <div className="mb-8">
            <h3 className="text-xl font-medium text-gray-800 mb-4">1. Refunds for Transaction Failures:</h3>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li className="mb-3">
                <strong>Standard Banking Procedures:</strong> In the event of a failed UPI transaction, the debited
                amount is typically auto-reversed to your bank account within T+1 day (where T is
                the transaction date), as per Reserve Bank of India (RBI) guidelines.
              </li>
              <li>
                <strong>Extended Resolution Timeframe:</strong> If the refund is not processed within 7 banking
                days, Nearwala will initiate an internal audit to investigate the delay. Upon verification
                and based on the evidence provided by the user, we will ensure the refund is
                processed within 14 banking days from the date of the transaction.
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-medium text-gray-800 mb-4">2. Shop Rejections:</h3>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li className="mb-3">
                <strong>Reporting an Issue:</strong> If a participating shop refuses to accept Nearwala Pay, please
                report the incident to our customer support team within 24 hours of the transaction
                attempt. Provide solid evidence, such as transaction details and any communication
                with the shop.
              </li>
              <li>
                <strong>Verification and Refund:</strong> Upon receiving your report, our support team will verify the
                details. If the shop's refusal is confirmed, Nearwala will initiate a refund for any
                debited amount related to the transaction.
              </li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium text-gray-800 mb-4">General Guidelines:</h3>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li className="mb-3">
                <strong>Timely Reporting:</strong> All refund-related issues must be reported to Nearwala customer
                support within 24 hours of the transaction or attempted transaction.
              </li>
              <li>
                <strong>Evidence Submission:</strong> Ensure that all necessary evidence, such as transaction IDs,
                screenshots, and communication records, are provided to facilitate a swift resolution.
              </li>
            </ul>
          </div>
        </section>

        <section className="bg-gray-50 p-6 rounded-lg">
          <p className="text-gray-700">
            Our policies are aligned with the guidelines set forth by regulatory authorities to ensure
            transparency and user satisfaction. For further assistance, please contact our customer
            support team through the Nearwala app or our official website.
          </p>
        </section>
      </div>
    </div>
  )
}

export default RefundPolicy