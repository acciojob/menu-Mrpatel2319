import React, { useState } from "react";
import './../styles/App.css';

// Menu data
const menuData = [
  {
    id: 1,
    title: "Buttermilk Pancakes",
    category: "breakfast",
    price: 15.99,
    img: "/images/pancakes.jpg",
    desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed"
  },
  {
    id: 2,
    title: "Diner Double",
    category: "lunch",
    price: 13.99,
    img: "/images/burger.jpg",
    desc: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing"
  },
  {
    id: 3,
    title: "Godzilla Milkshake",
    category: "shakes",
    price: 6.99,
    img: "/images/milkshake.jpg",
    desc: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral"
  },
  {
    id: 4,
    title: "Country Delight",
    category: "breakfast",
    price: 20.99,
    img: "/images/eggs.jpg",
    desc: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut"
  }
];

const App = () => {
  // State for menu items and selected category
  const [menuItems, setMenuItems] = useState(menuData);
  const [activeCategory, setActiveCategory] = useState("all");

  // Get unique categories
  const categories = ["all", ...new Set(menuData.map(item => item.category))];

  // Filter menu items by category
  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setMenuItems(menuData);
      return;
    }
    const filteredItems = menuData.filter(item => item.category === category);
    setMenuItems(filteredItems);
  };

  return (
    <div className="menu-container">
      <h1>Our Menu</h1>
      
      {/* Category Buttons */}
      <div className="categories">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => filterItems(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Menu Items */}
      <div className="menu-items">
        {menuItems.map(item => (
          <div key={item.id} className="menu-item">
            <img src={item.img} alt={item.title} className="menu-img" />
            <div className="item-info">
              <header>
                <h4>{item.title}</h4>
                <h4 className="price">${item.price}</h4>
              </header>
              <p className="item-text">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
