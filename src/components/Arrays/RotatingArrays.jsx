import React from 'react';
import CodilityWrapper from '../../CodilityWrapper';

const RotatingArrays = () => {
  const scope = {};
  const description = `
  # RotatingArrays
  
  ### Rotate an array, N times.

  <br/>

  An array A consisting of N integers is given.\n
  Rotation of the array means that each element is shifted right by one index, and the last element of the array is moved to the first place. \n
  
  <br/>

  For example, the rotation of array 
  \`\`\`
  A = [3, 8, 9, 7, 6] 
  \`\`\`
  is 
  \`\`\`
  [6, 3, 8, 9, 7] 
  \`\`\`

  (elements are shifted right by one index and 6 is moved to the first place).

  The goal is to rotate array A K times; that is, each element of A will be shifted to the right K times.

  Write a function... 

   \`\`\`
   function solution(A, K);
   \`\`\`

  that... \n 

  <br/>

  
  **given an array A consisting of N integers and an integer K, returns the array A rotated K times.** \n

  <br/>
   
   For example, given

   \`\`\`
   A = [3, 8, 9, 7, 6]
   K = 3
   \`\`\`

   the function should return [9, 7, 6, 3, 8]. Three rotations were made:

   \`\`\`
   [3, 8, 9, 7, 6] -> [6, 3, 8, 9, 7]
    [6, 3, 8, 9, 7] -> [7, 6, 3, 8, 9]
    [7, 6, 3, 8, 9] -> [9, 7, 6, 3, 8]
   \`\`\`

   Assume that:\n </br>
   - N and K are integers within the range [0..100];
   - each element of array A is an integer within the range [−1,000..1,000].
  `;

  const code = `
  class RotatingArrays extends React.Component {
    render(props) {
      const data = [3, 8, 9, 7, 6];
      const K = 3;
      const lastItems = data.slice(-K);
      const remainingItems = data.slice(0,K);
      const res = [...lastItems, ...remainingItems];
      return <div className='result'>Result: <div className='value'>{res}</div></div>;    }
  }
  `;

  return (
    <CodilityWrapper
      scope={scope}
      description={description}
      code={code}
      escapeHtml={false}
    />
  );
};

export default RotatingArrays;
