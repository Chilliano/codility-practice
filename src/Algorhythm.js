import React from 'react';
import BinaryGap from './BinaryGap.js';
import CodilityWrapper from './CodilityWrapper';

const Algorhythm = () => {
  const targetNumber = 12345;
  const scope = { BinaryGap };
  const code = `<BinaryGap N={${targetNumber}} />`;

  return <CodilityWrapper scope={scope} code={code} />;
};

export default Algorhythm;
