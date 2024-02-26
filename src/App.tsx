import React from 'react';

import './App.css';
import Counter from './components/Counter';
import Button from './components/Button';

function App() {
  const [counters, setCounters] = React.useState<JSX.Element[]>([]);

  const addNewCounter = () => {
    const counterLabel = `Counter ${counters.length + 1}`;

    setCounters((prevState) => [
      ...prevState,
      <Counter label={counterLabel} />,
    ]);
  };

  return (
    <div className="wrapper">
      <section className="section section--wrapper">
        {counters}
        <Button className="button--lg" onClick={addNewCounter}>
          Add
        </Button>
      </section>
    </div>
  );
}

export default App;
