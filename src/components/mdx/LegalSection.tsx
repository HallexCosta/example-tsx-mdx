import React from 'react';

const LegalSection: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <section className="bg-gray-50 border border-gray-200 p-4 my-4 rounded">
    {children}
  </section>
);

export default LegalSection; 