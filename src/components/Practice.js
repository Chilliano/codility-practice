import React from 'react';

const Practice = () => {
  const data = [9, 7, 6, 3, 8];
  const K = 4;

  const result = (data, k) => {
    const lastItems = data.splice(-k);
    const res = [...lastItems, ...arr];
    return res;
  };

  return (
    <div>
      <h1>Practice</h1>
    </div>
  );
};

export default Practice;
