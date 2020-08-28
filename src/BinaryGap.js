import React from 'react';
import CodilityWrapper from './CodilityWrapper';

const BinaryGap = () => {
  const targetNumber = '12345';
  const scope = { targetNumber };
  const code = `
  class BinaryGap extends React.Component {
    render(props) {
      const N = ${targetNumber};
      if (!N) {
        return 0;
      }
      
      let max = 0;
      let count = 0;
      const bitRep = N.toString(2).split('');
    
      // only one number has to be 1
      if (N < 2) {
        return 0;
      }
    
      bitRep.forEach((num) => {
        num = parseInt(num);
        if (num !== 0) {
          if (count > max) {
            max = count;
          }
          count = 0;
        } else {
          count++;
        }
      });
    
      return <div className='result'>Solution is {max}</div>;    }
  }
  `;

  return <CodilityWrapper scope={scope} code={code} title={'BinaryGap'} />;
};

export default BinaryGap;
