import React from 'react';

const DocumentPage: React.FC = () => {
  return (
    <div className="document-page max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Terms of Service and Privacy Policy</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
        <p className="mb-4">
          Welcome to the Terms of Service and Privacy Policy of our platform.
          This document sets out the rules and guidelines for using our services.
        </p>
        <p className="mb-4">
          By accessing and using our platform, you agree to the terms set forth herein.
          We recommend that you read this document carefully before proceeding.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Definitions</h2>
        <p className="mb-4">For the purposes of this document, the following terms shall have the meanings below:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <strong>Platform:</strong> Refers to the set of services and features made available
            through our website and applications.
          </li>
          <li>
            <strong>User:</strong> Any person who accesses or uses the Platform.
          </li>
          <li>
            <strong>Content:</strong> Information, data, texts, images, and other materials made available
            through the Platform.
          </li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Use of the Platform</h2>
        <p className="mb-4">By using our Platform, you agree to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Provide accurate and up-to-date information</li>
          <li>Maintain the confidentiality of your account</li>
          <li>Not use the Platform for unlawful purposes</li>
          <li>Respect intellectual property rights</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Privacy and Data Protection</h2>
        <p className="mb-4">
          Our privacy policy describes how we collect, use, and protect your personal information.
          For more details, see our{' '}
          <a href="/privacy" className="text-blue-600 hover:underline">
            full Privacy Policy
          </a>.
        </p>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Data Collected</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Registration information</li>
            <li>Platform usage data</li>
            <li>Device information</li>
            <li>Cookies and similar technologies</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Responsibilities</h2>
        <p className="mb-4">Our responsibilities include:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            Keeping the Platform available and functioning properly
          </li>
          <li>
            Protecting users' data in accordance with applicable laws
          </li>
          <li>
            Providing technical support when necessary
          </li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Contact</h2>
        <p className="mb-4">
          For questions regarding these terms, contact us at{' '}
          <a href="mailto:legal@company.com" className="text-blue-600 hover:underline">
            legal@company.com
          </a>
          {' '}or by phone at (11) 1234-5678.
        </p>
      </section>

      <footer className="text-sm text-gray-600 mt-8 pt-4 border-t">
        <p>Last updated: {new Date().toLocaleDateString('en-US')}</p>
      </footer>
    </div>
  );
};

export default DocumentPage; 