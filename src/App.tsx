import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import DocumentPage from './components/DocumentPage';
import MDXDocument from './components/DocumentPage.mdx';
import InfoBox from './components/mdx/InfoBox';
import FeatureList from './components/mdx/FeatureList';
import CodeExample from './components/mdx/CodeExample';
import CallToAction from './components/mdx/CallToAction';
import LegalNotice from './components/mdx/LegalNotice';
import LegalSection from './components/mdx/LegalSection';
import TableOfContents from './components/mdx/TableOfContents';

const components = {
  h1: ({ children }: { children: React.ReactNode }) => (
    <h1 className="text-3xl font-bold mb-8 text-center">{children}</h1>
  ),
  h2: ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-2xl font-semibold mb-4">{children}</h2>
  ),
  InfoBox,
  FeatureList,
  CodeExample,
  CallToAction,
  LegalNotice,
  LegalSection,
  TableOfContents,
};

const App: React.FC = () => {
  return (
    <MDXProvider components={components}>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">TSX vs MDX Comparison</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">TSX Version</h2>
            <DocumentPage />
          </div>
          
          <div className="border rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">MDX Version</h2>
            <MDXDocument />
          </div>
        </div>
      </div>
    </MDXProvider>
  );
};

export default App; 