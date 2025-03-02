// src/components/App.js
import React, { useState } from 'react';

const menuItems = [
  {
    id: 1,
    title: "Buttermilk Pancakes",
    category: "Breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed"
  },
  {
    id: 2,
    title: "Diner Double",
    category: "Lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing"
  },
  {
    id: 3,
    title: "Godzilla Milkshake",
    category: "Shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral."
  }
  // Add more items as needed
];

const App = () => {
  const [items, setItems] = useState(menuItems);
  const categories = ["All", "Breakfast", "Lunch", "Shakes"];

  const filterItems = (category) => {
    if (category === "All") {
      setItems(menuItems);
      return;
    }
    const filteredItems = menuItems.filter(item => item.category === category);
    setItems(filteredItems);
  };

  return (
    <div>
      <h1>Our Menu</h1>
      <div className="btn-container">
        {categories.map((category, index) => (
          <button
            key={index}
            id={`filter-btn-${index}`}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="section-center">
        {items.map(item => (
          <article key={item.id} className="menu-item">
            <img src={item.img} alt={item.title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{item.title}</h4>
                <h4 className="price">${item.price}</h4>
              </header>
              <p className="item-text">{item.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default App;
