import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
//implemented on final
// const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);

  let allCategories = ['All'];
  items.forEach((item) => {
    if (!allCategories.includes(item.category)) {
      allCategories.push(item.category);
    }
  });

  const filterItems = (category) => {
    if (category === 'All') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <>
      <main>
        <section className='menu section'>
          <div className='title'>
            <h2>our menu</h2>
            <div className='underline'></div>
          </div>
          <Categories allCategories={allCategories} filterItems={filterItems} />
          <Menu items={menuItems} />;
        </section>
      </main>
    </>
  );
}

export default App;
