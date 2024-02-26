import React from 'react';

import './App.css';
import Counter from './components/Counter';
import Button from './components/Button';
import CounterSnapshot from './components/CounterSnapshot';

type CounterRef = {
  [label: string]: number;
};

function App() {
  const [counters, setCounters] = React.useState<JSX.Element[]>([]);
  const [snapshots, setSnapshots] = React.useState<JSX.Element[]>([]);

  // Cache counter's data
  const counterRef = React.useRef<CounterRef | {}>({});

  const addNewCounter = () => {
    const counterLabel = `Counter ${counters.length + 1}`;

    setCounters((prevState) => [
      ...prevState,
      <Counter key={counterLabel} label={counterLabel} ref={counterRef} />,
    ]);
  };

  const takeSnapshot = () => {
    const counterSnapshots = Object.entries(counterRef.current).map(
      ([label, value]) => (
        <CounterSnapshot key={label} label={label} value={value} />
      )
    );

    setSnapshots(counterSnapshots);
  };

  return (
    <div className="wrapper">
      <section className="section section--wrapper">
        {counters}
        <Button className="button--lg" onClick={addNewCounter}>
          Add
        </Button>
      </section>

      <section className="section section--wrapper">
        <Button className="button--lg" onClick={takeSnapshot}>
          Submit
        </Button>
        {snapshots}
      </section>
    </div>
  );
}

export default App;
