import React from 'react';

const BinaryGap = ({ N }) => {
  let max = 0;
  let count = 0;
  const bitRep = N.toString(2).split('');
  console.log('BinaryGap -> bitRep', bitRep);

  // only one number has to be 1
  if (N < 2) {
    return 0;
  }

  bitRep.forEach((num) => {
    num = parseInt(num);
    console.log('num is ', num);
    if (num !== 0) {
      console.log(`number not zero so checking if ${count} bigger than ${max}`);
      if (count > max) {
        max = count;
      }
      count = 0;
    } else {
      count++;
      console.log('adding to count');
    }
  });

  return <div>Solution is {max}</div>;
};

export default BinaryGap;
