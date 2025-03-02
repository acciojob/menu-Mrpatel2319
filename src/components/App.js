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
];

function App() {
  const [items, setItems] = useState(menuItems);

  const filterItems = (category) => {
    if (category === "All") {
      setItems(menuItems);
    } else {
      const newItems = menuItems.filter((item) => item.category === category);
      setItems(newItems);
    }
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
        </div>
        <div className="btn-container">
          <button id="filter-btn-0" onClick={() => filterItems("All")}>
            All
          </button>
          <button id="filter-btn-1" onClick={() => filterItems("Breakfast")}>
            Breakfast
          </button>
          <button id="filter-btn-2" onClick={() => filterItems("Lunch")}>
            Lunch
          </button>
          <button id="filter-btn-3" onClick={() => filterItems("Shakes")}>
            Shakes
          </button>
        </div>
        <div className="section-center">
          {items.map((menuItem) => {
            const { id, title, img, desc, price } = menuItem;
            return (
              <article key={id} className="menu-item">
                <img src={img} alt={title} className="photo" />
                <div className="item-info">
                  <header>
                    <h4>{title}</h4>
                    <h4 className="price">${price}</h4>
                  </header>
                  <p className="item-text">{desc}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
