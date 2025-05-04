import React from 'react';

interface CallToActionProps {
  href: string;
  children: React.ReactNode;
}

const CallToAction: React.FC<CallToActionProps> = ({ href, children }) => {
  return (
    <div className="my-6 text-center">
      <a
        href={href}
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
      >
        {children}
      </a>
    </div>
  );
};

export default CallToAction; 