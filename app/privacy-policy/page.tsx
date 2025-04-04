import React from 'react'

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto padding-x padding-y">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
        <p className="text-gray-600">Last updated: February 22, 2024</p>
      </div>

      <div className="prose prose-lg max-w-none">
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Introduction</h2>
          <p className="text-gray-700">
            Nearwala is committed to protecting your privacy. This Privacy Policy outlines how we
            collect, use, and safeguard your personal information when you use our services.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Information Collection</h2>
          <p className="text-gray-700 mb-4">
            We may collect personal information, including but not limited to:
          </p>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium text-gray-800 mb-3">Personal Details:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Name</li>
              <li>Address</li>
              <li>Phone number</li>
              <li>Email address</li>
              <li>Payment information</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium text-gray-800 mb-3">Device Information:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>IP address</li>
              <li>Device type</li>
              <li>Operating system</li>
              <li>Unique device identifiers</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium text-gray-800 mb-3">Usage Data:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Details of your interactions with our app</li>
              <li>Search history</li>
              <li>Pages viewed</li>
            </ul>
          </div>

          <p className="text-gray-700">
            Additionally, we may collect information from third-party sources, such as social media
            platforms, to enhance our understanding of our users and provide better services.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Use of Information</h2>
          <p className="text-gray-700 mb-4">
            The information we collect is used for purposes including:
          </p>
          <ol className="list-decimal pl-6 space-y-3 text-gray-700">
            <li>Providing and improving our services</li>
            <li>Personalizing the user experience</li>
            <li>Communicating with users about products and services</li>
            <li>Sending promotional materials</li>
            <li>Complying with legal requirements</li>
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sharing of Information</h2>
          <p className="text-gray-700 mb-4">
            Nearwala may share your personal information with third parties for the following purposes:
          </p>
          <ol className="list-decimal pl-6 space-y-3 text-gray-700">
            <li>To complete transactions or provide services requested by the user</li>
            <li>To comply with legal requirements</li>
            <li>To enforce our policies or protect the rights and safety of Nearwala and its users</li>
          </ol>
          <p className="text-gray-700 mt-4">
            We take steps to ensure that third parties protect the privacy of your information and use it
            only for the purposes for which it was shared.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Security</h2>
          <p className="text-gray-700">
            We implement reasonable measures to protect your personal information from unauthorized
            access, misuse, or alteration. However, no data transmission or storage system can be
            guaranteed as completely secure.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">User Rights</h2>
          <p className="text-gray-700">
            You have the right to access, update, and delete your personal information at any time. To
            exercise these rights, please contact us at <a href="mailto:support@nearwala.com" className="text-indigo-600 hover:underline">support@nearwala.com</a>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Changes to Privacy Policy</h2>
          <p className="text-gray-700">
            Nearwala may update this Privacy Policy periodically to reflect changes in our practices or
            the law. We will post any changes on our website and notify users of material changes
            through email or other means. Your continued use of Nearwala's services after such
            postings constitutes your acceptance of the changes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
          <p className="text-gray-700">
            If you have any questions or concerns about our Privacy Policy, please email us at{' '}
            <a href="mailto:support@nearwala.com" className="text-indigo-600 hover:underline">support@nearwala.com</a>.
          </p>
          <p className="text-gray-700 mt-2">
            <strong>Effective Date:</strong> Feb 22, 2024
          </p>
        </section>
      </div>
    </div>
  )
}

export default PrivacyPolicy