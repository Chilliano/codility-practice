import React from 'react';
import ReactMarkdown from 'react-markdown';
import CodeBlock from './renderers/CodeBlock';

const Markdown = ({ text, escapeHtml }) => {
  return (
    <ReactMarkdown
      escapeHtml={escapeHtml}
      source={text}
      renderers={{ code: CodeBlock }}
      
    />
  );
};

export default Markdown;
