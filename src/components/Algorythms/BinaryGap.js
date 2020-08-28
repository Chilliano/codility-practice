import React from 'react';
import CodilityWrapper from '../../CodilityWrapper';

const BinaryGap = () => {
  const targetNumber = '12345';
  const scope = { targetNumber };
  const title = 'BinaryGap';
  const description = `
  # BinaryGap

  ## Find longest sequence of zeros in binary representation of an integer.

  ### Description: 
    - A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.
    - For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.

    Write a function:
  `;

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

  return (
    <CodilityWrapper
      description={description}
      scope={scope}
      code={code}
      title={title}
    />
  );
};

export default BinaryGap;
