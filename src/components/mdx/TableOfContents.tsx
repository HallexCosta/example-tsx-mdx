import React from 'react';

const TableOfContents: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <nav className="bg-blue-50 border-l-4 border-blue-400 p-4 my-4 rounded">
    {children}
  </nav>
);

export default TableOfContents; 