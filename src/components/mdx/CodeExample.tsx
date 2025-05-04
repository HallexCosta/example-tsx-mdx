import React from 'react';

interface CodeExampleProps {
  language: string;
  children: React.ReactNode;
}

const CodeExample: React.FC<CodeExampleProps> = ({ language, children }) => {
  return (
    <div className="my-4">
      <div className="bg-gray-800 text-white p-2 rounded-t">
        {language}
      </div>
      <pre className="bg-gray-100 p-4 rounded-b overflow-x-auto">
        <code>{children}</code>
      </pre>
    </div>
  );
};

export default CodeExample; 