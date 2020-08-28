import React, { Fragment } from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import Markdown from './Markdown';

const CodilityWrapper = ({ code, scope, description, escapeHtml }) => {
  return (
    <Fragment>
      <div className="description">
        <Markdown text={description} escapeHtml={escapeHtml} />
      </div>
      <div className="code-block">
        <LiveProvider code={code} scope={scope}>
          <LiveEditor />
          <LiveError />
          <LivePreview />
        </LiveProvider>
      </div>
    </Fragment>
  );
};

export default CodilityWrapper;
