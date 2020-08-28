import React, { Fragment } from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import Markdown from './components/Markdown';

const CodilityWrapper = ({ code, scope, title, description }) => {
  return (
    <Fragment>
      <div className="title">{title}</div>
      <div className="description">
        <Markdown text={description} />
      </div>
      <LiveProvider code={code} scope={scope}>
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    </Fragment>
  );
};

export default CodilityWrapper;
