import React from 'react';

const LegalNotice: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 my-4 rounded">
    {children}
  </div>
);

export default LegalNotice; 