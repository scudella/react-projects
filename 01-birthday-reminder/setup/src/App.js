import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [value, setValue] = useState(data.length);
  const [people, setPeople] = useState(data);

  const clearAll = () => {
    setPeople([]);
    setValue(0);
  };
  return (
    <main>
      <section className="container">
        <h3>{value} birthdays today</h3>
        <List people={people} />
        <button onClick={clearAll}>clear all</button>
      </section>
    </main>
  );
}

export default App;
