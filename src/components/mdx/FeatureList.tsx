import React from 'react';

interface FeatureListProps {
  children: React.ReactNode;
}

const FeatureList: React.FC<FeatureListProps> = ({ children }) => {
  return (
    <ul className="my-4 space-y-2">
      {children}
    </ul>
  );
};

export default FeatureList; 