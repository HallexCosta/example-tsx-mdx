import React from 'react';

interface InfoBoxProps {
  type?: 'warning' | 'info' | 'success';
  children: React.ReactNode;
}

const InfoBox: React.FC<InfoBoxProps> = ({ type = 'info', children }) => {
  const bgColor = {
    warning: 'bg-yellow-100 border-yellow-500',
    info: 'bg-blue-100 border-blue-500',
    success: 'bg-green-100 border-green-500',
  }[type];

  return (
    <div className={`p-4 my-4 border-l-4 ${bgColor} rounded`}>
      {children}
    </div>
  );
};

export default InfoBox; 