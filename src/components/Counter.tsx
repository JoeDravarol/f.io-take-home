import React from 'react';

import MinusButton from './MinusButton';
import PlusButton from './PlusButton';

type CounterProps = {
  label: string;
  updateCounterValue: (count: number) => void;
};

const Counter = ({ label, updateCounterValue }: CounterProps) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    updateCounterValue(count);
  }, [count]);

  return (
    <div className="counter">
      <span>{label}</span>

      <div className="cta-group">
        <MinusButton
          handleClick={() => setCount((prevCount) => prevCount - 1)}
        />
        <span className="counter_value">{count}</span>
        <PlusButton
          handleClick={() => setCount((prevCount) => prevCount + 1)}
        />
      </div>
    </div>
  );
};

export default Counter;
