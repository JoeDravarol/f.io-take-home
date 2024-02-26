import React from 'react';

import './App.css';
import Counter from './components/Counter';
import Button from './components/Button';
import CounterSnapshot from './components/CounterSnapshot';

type Counter = {
  id: string;
  label: string;
  value: number;
};

function App() {
  const [counters, setCounters] = React.useState<Counter[]>([]);
  const [snapshots, setSnapshots] = React.useState<Counter[]>([]);

  const addNewCounter = () => {
    const newCounter = {
      id: crypto.randomUUID(),
      label: `Counter ${counters.length + 1}`,
      value: 0,
    };

    setCounters((prevState) => [...prevState, newCounter]);
  };

  const updateCounterValue = (id: string) => {
    return (count: number) => {
      setCounters((prevCounters) =>
        prevCounters.map((counter) =>
          counter.id !== id ? counter : { ...counter, value: count }
        )
      );
    };
  };

  const takeSnapshot = () => {
    setSnapshots(counters);
  };

  return (
    <div className="wrapper">
      <section className="section section--wrapper">
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            label={counter.label}
            updateCounterValue={updateCounterValue(counter.id)}
          />
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
