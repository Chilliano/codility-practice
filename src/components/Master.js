import React, { useState, Fragment } from 'react';
import { BinaryGap, OddOccurencesInArray, RotatingArrays } from './index';
import './master.scss';
const Master = () => {
  const components = ['BinaryGap', 'OddOccurencesInArray', 'RotatingArrays'];

  const [switcher, setSwitcher] = useState({
    BinaryGap: false,
    OddOccurencesInArray: false,
    RotatingArrays: false
  });
  const [open, setOpen] = useState(false);

  const handleClick = (item) => {
    const result = {
      ...switcher
    };
    result[item] = !result[item];
    setSwitcher(result);
  };

  return (
    <Fragment>
      <div>
        <h3>
          <button onClick={() => setOpen(!open)}>
            {open ? 'Hide Examples' : 'Display List of Examples'}
          </button>
        </h3>
        <ul className={`list ${open ? 'open' : ''}`}>
          {components.map((item) => {
            return (
              <li key={item}>
                <button onClick={() => handleClick(item)}>
                  {item} {switcher[item] === true ? 'SHOWING' : 'HIDDEN'}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="solution">
        {switcher.BinaryGap && <BinaryGap />}
        {switcher.OddOccurencesInArray && <OddOccurencesInArray />}
        {switcher.RotatingArrays && <RotatingArrays />}
      </div>
    </Fragment>
  );
};

export default Master;
