import React from 'react';
import CodilityWrapper from '../../CodilityWrapper';

const BinaryGap = () => {
  const targetNumber = '12345';
  const scope = { targetNumber };

  const description = `
  # BinaryGap

  
  ### Find the longest sequence of zeros, in the binary representation of an integer.

  <br/>

  A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones aboth ends in the binary representation of N.

  <br/>

  For example, number 9 has binary representation 1001 and contains a binary gap of length 2. \n
  The number 529 has   binarrepresentation 1000010001 and contains two binary gaps: one of length 4 and one of length 3.\n 
  The number 20 has   binarrepresentation 10100 and contains one binary gap of length 1. \n
  The number 15 has binary representation 1111 and has   nbinary gaps. \n
  The number 32 has binary representation 100000 and has no binary gaps

  <br/>

  Write a function... 

   \`\`\`
   int solution(int N);
   \`\`\`

  that... \n
  
  **given a positive integer N**, _returns_ **the length of its longest binary gap.** \n
   
  (The function _should_ return 0 if N doesn’t contain a binary gap.) \n

   <br /> 

   For example, **given N = 1041** the function should return **5**, because N has binary representation _1**00000**10001_ and so its longest binary gap is of length 5. \n 
   Given **N = 32** the function should return *0*, because N has binary representation _100000_ and thus **no binary gaps**.\n 
   Write an _efficient_ algorithm for the following assumptions:

   \`\`\`
   N is an integer within the range [1..2,147,483,647]
   \`\`\`
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
    
      return <div className='result'>Result: <div className='value'>{max}</div></div>;    }
  }
  `;

  return (
    <CodilityWrapper
      description={description}
      scope={scope}
      code={code}
      escapeHtml={false}
    />
  );
};

export default BinaryGap;
