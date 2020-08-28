import React from 'react';
import ReactMarkdown from 'react-markdown';

const Markdown = ({ text }) => {
  return <ReactMarkdown source={text} />;
};

export default Markdown;
