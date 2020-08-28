import React, { Fragment } from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

const CodilityWrapper = ({ code, scope, title }) => {
  return (
    <Fragment>
      <div className="title">{title}</div>
      <LiveProvider code={code} scope={scope}>
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    </Fragment>
  );
};

export default CodilityWrapper;
