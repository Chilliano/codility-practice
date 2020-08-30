import React from 'react';
import CodilityWrapper from '../../CodilityWrapper';

const OddOccurencesInArray = () => {
  const scope = {};
  const description = `
  # OddOccurrencesInArray
  
  ### Find the value of odd elements that occurs in a jumbled array.

  <br/>

  A non-empty array A consisting of N integers is given. The array contains an odd number of elements, and each element of the array can be paired with another element that has the same value, except for one element that is left unpaired.

  <br/>

  For example, in array A such that:
  \`\`\`
  A[0] = 9; 
  A[1] = 3; 
  A[2] = 9; 
  A[3] = 3; 
  A[4] = 9; 
  A[5] = 7; 
  A[6] = 9;
  \`\`\`

  - the elements at indexes 0 and 2 have value 9,
  - the elements at indexes 1 and 3 have value 3,
  - the elements at indexes 4 and 6 have value 9,
  - the element at index 5 has value 7 and is unpaired.

  <br/>

  Write a function... 

   \`\`\`
   int solution(vector<int> &A);
   \`\`\`

  that... \n
  
  **given an array A consisting of N integers fulfilling the above conditions, returns the value of the unpaired element.** \n
   
  (the function should return 7, as explained in the example above.) \n

   <br /> 

   Write an *efficient* algorithm for the following assumptions:

  - N is an odd integer within the range 1..1,000,000;
  - each element of array A is an integer within the range 1..1,000,000,000;
  - all but one of the values in A occur an even number of times.
  `;

  const code = `
  class OddOccurencesInArray extends React.Component {
    render(props) {
      const data = [1, 3, 5, 7, 5, 2, 2, 1, 3];
      const unique = [];
      const matches = [];
      
      data.forEach((item) => {
        if (unique.indexOf(item) === -1) {
          unique.push(item);
        } else {
          const index = unique.indexOf(item);
          matches.push(unique[index]);
        }
      });
      
      const result = unique.filter((item) => {
        return matches.indexOf(item) === -1;
      });
      return <div className='result'>Result: <div className='value'>{result}</div></div>;    }
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

export default OddOccurencesInArray;
