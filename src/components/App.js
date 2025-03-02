// App.js
import React, { useState } from 'react';
import Menu from './Menu';

const menuData = [
  {
    id: 1,
    title: 'Buttermilk Pancakes',
    category: 'Breakfast',
    price: 15.99,
    img: '/images/pancakes.jpg',
    desc: 'Stack of fluffy buttermilk pancakes topped with fresh berries and syrup'
  },
  {
    id: 2,
    title: 'Diner Double',
    category: 'Lunch',
    price: 13.99,
    img: '/images/burger.jpg',
    desc: 'Classic double burger with fries and dipping sauce'
  },
  {
    id: 3,
    title: 'Godzilla Milkshake',
    category: 'Shakes',
    price: 6.99,
    img: '/images/milkshake.jpg',
    desc: 'Loaded milkshake with whipped cream and strawberry topping'
  },
  // Add more menu items as needed
];

const App = () => {
  const [menuItems, setMenuItems] = useState(menuData);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Breakfast', 'Lunch', 'Shakes'];

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === 'All') {
      setMenuItems(menuData);
      return;
    }
    const newItems = menuData.filter(item => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <div className="btn-container">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => filterItems(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <Menu items={menuItems} />
      </section>
    </main>
  );
};

export default App;
