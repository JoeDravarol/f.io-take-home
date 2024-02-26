import React from 'react';

import MinusButton from './MinusButton';
import PlusButton from './PlusButton';

type CounterProps = {
  label: string;
};

const Counter = React.forwardRef(({ label }: CounterProps, ref) => {
  const [counter, setCounter] = React.useState(0);

  return (
    <div className="counter">
      <span>{label}</span>

      <div className="cta-group">
        <MinusButton
          handleClick={() => setCounter((prevCounter) => prevCounter - 1)}
        />
        <span className="counter_value">{counter}</span>
        <PlusButton
          handleClick={() => setCounter((prevCounter) => prevCounter + 1)}
        />
      </div>
    </div>
  );
});

export default Counter;
