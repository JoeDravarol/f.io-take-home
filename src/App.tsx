import React from 'react';

import './App.css';
import Counter from './components/Counter';
import Button from './components/Button';
import CounterSnapshot from './components/CounterSnapshot';

type CounterRef = {
  [label: string]: number;
};

type Counter = {
  id: string;
  label: string;
};

type Snapshot = {
  id: string;
  label: string;
  value: number;
};

function App() {
  const [counters, setCounters] = React.useState<Counter[]>([]);
  const [snapshots, setSnapshots] = React.useState<Snapshot[]>([]);

  // Cache counter's data
  const counterRef = React.useRef<CounterRef | {}>({});

  const addNewCounter = () => {
    const newCounter = {
      id: crypto.randomUUID(),
      label: `Counter ${counters.length + 1}`,
    };

    setCounters((prevState) => [...prevState, newCounter]);
  };

  const takeSnapshot = () => {
    const countersData = Object.entries(counterRef.current).map(
      ([label, value]) => ({ id: crypto.randomUUID(), label, value })
    );

    setSnapshots(countersData);
  };

  return (
    <div className="wrapper">
      <section className="section section--wrapper">
        {counters.map((counter) => (
          <Counter key={counter.id} label={counter.label} ref={counterRef} />
        ))}
        <Button className="button--lg" onClick={addNewCounter}>
          Add
        </Button>
      </section>

      <section className="section section--wrapper">
        <Button className="button--lg" onClick={takeSnapshot}>
          Submit
        </Button>
        {snapshots.map((snapshot) => (
          <CounterSnapshot
            key={snapshot.id}
            label={snapshot.label}
            value={snapshot.value}
          />
        ))}
      </section>
    </div>
  );
}

export default App;
